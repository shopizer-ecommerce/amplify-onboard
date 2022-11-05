import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../context";
import { LANGUAGES, PROVINCES, COUNTRY } from "../../constants";
import Mudations from "../../api/mutations";
import { Button, Form, Input, Select, Phone } from "../../components";
import { FormatDate } from "../../helpers";
import moment from "moment";


const ProfileAttributes = ({ handleErrors, setAlert }) => {
  const { state } = useContext(AppContext);
  const { user } = state;
  const { loadUser, setLoading } = useOutletContext();
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBithdate] = useState("");


  /** Fill the form */
  useEffect(() => {
    if (user) {
      console.log("User from DB " + JSON.stringify(user));
      setName(user?.name || "");
      setFirstName(user?.firstName || "");
      setLastName(user?.lastName || "");
      setAddress(user?.address || "");
      setCity(user?.city || "");
      setPostalCode(user?.postalCode || "");
      setProvince(user?.province || "");
      setPhone(user?.phone || "");
      setCountry(user?.country || "");
      setBithdate(user?.birthdate ? FormatDate.Show(user?.birthdate, user.locale) : "");
    }
  }, [user]);
  

  const loading = () => {
    setAlert();
    setLoading(true);
  };

  const handleAttributes = async () => {
    loading();
    try {
      console.log('Before updating ' + JSON.stringify(user));
      const birthdateFormated =
        user.locale === "pt-BR"
          ? moment(birthdate, "DD/MM/YYYY").format("YYYY-MM-DD")
          : moment(birthdate, "YYYY-MM-DD").format("YYYY-MM-DD");
      await Mudations.UpdateUser({
        id: user.id,
        email: user.email,
        locale: user.locale,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        postalCode: postalCode,
        province: province,
        country: country,
        phone: phone
        //name: user.firstName + ' ' + user.lastName,
        //birthdate: '1900-01-01',
      });
      console.log('After update' + JSON.stringify(user));
      loadUser({ force: true, email: user.email });
      setAlert({
        type: "success",
        text: LANGUAGES[user.locale].Profile.AttributesSuccess,
      });
    } catch (error) {
      console.log('Error ' + JSON.stringify(error));
      handleErrors(error.message);
    }
    setLoading(false);
  };

  const handleFormatDate = (date) => setBithdate(FormatDate.Format(date, user.locale));

  const disabledAttributes = () => !firstName || !lastName;

  return (
    <Form>
      <div className="mb-4 w-full flex flex-col gap-4 justify-center">
        <Input
          type="text"
          placeholder={LANGUAGES[user.locale].Profile.FirstName}
          value={firstName}
          handler={setFirstName}
          error={!firstName}
        />
        <Input
          type="text"
          placeholder={LANGUAGES[user.locale].Profile.LastName}
          value={lastName}
          handler={setLastName}
          error={!lastName}
        />
        <Input
          type="text"
          placeholder={LANGUAGES[user.locale].Profile.Address}
          value={address}
          handler={setAddress}
          error={!address}
        />
        <Input
          type="text"
          placeholder={LANGUAGES[user.locale].Profile.City}
          value={city}
          handler={setCity}
          error={!city}
        />
        <Select value={province} handler={setProvince}>
          {Object.keys(PROVINCES).map((l) => (
            <option key={l} value={l}>
              {LANGUAGES[user.locale].Profile.Provinces[l]}
            </option>
          ))}
        </Select>
        <Select value={country} handler={setCountry}>
          {Object.keys(COUNTRY).map((l) => (
            <option key={l} value={l}>
              {LANGUAGES[user.locale].Profile.Country[l]}
            </option>
          ))}
        </Select>
        <Phone
          placeholder={LANGUAGES[user.locale].Profile.Phone}
          value={phone}
          handler={setPhone}
          error={!phone}
        />
        <Button
          text={LANGUAGES[user.locale].Profile.ChangeAttributes}
          disabled={disabledAttributes()}
          handler={() => handleAttributes()}
          full
        />
      </div>
    </Form>
  );
};

export default ProfileAttributes;
