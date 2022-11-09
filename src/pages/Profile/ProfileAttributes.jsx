import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../context";
import { LANGUAGES, PROVINCES, COUNTRY } from "../../constants";
import Mudations from "../../api/mutations";
import { Button, Form, Input, Select, Phone, Picture, Agreement } from "../../components";


const ProfileAttributes = ({ handleErrors, setAlert }) => {
  const { state } = useContext(AppContext);
  const { user } = state;
  const { loadUser, setLoading } = useOutletContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [agreement, setAgreement] = useState("");


  /** Fill the form */
  useEffect(() => {
    setProvince("qc");
    setCountry("CA");
    if (user) {
      //console.log("User from DB " + JSON.stringify(user));
      setFirstName(user?.firstName || "");
      setLastName(user?.lastName || "");
      setAddress(user?.address || "");
      setCity(user?.city || "");
      setPostalCode(user?.postalCode || "");
      setProvince(user?.province || "");
      setPhone(user?.phone || "");
      setCountry(user?.country || "");
      setAgreement(user?.agreement || false);
      //setBithdate(user?.birthdate ? FormatDate.Show(user?.birthdate, user.locale) : "");
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
        phone: phone,
        agreement: agreement
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

  const disabledAttributes = () => !firstName || !lastName || !agreement;

  return (
    <Form>
      <div className="mb-4 w-full flex flex-col gap-4 justify-center">
        <Picture/>
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
              {LANGUAGES[user.locale].Profile.CountryList[l]}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          placeholder={LANGUAGES[user.locale].Profile.PostalCode}
          value={postalCode}
          handler={setPostalCode}
          error={!postalCode}
        />
        <Phone
          placeholder={LANGUAGES[user.locale].Profile.Phone}
          value={phone}
          handler={setPhone}
          error={!phone}
        />

        <Agreement
           placeholder={LANGUAGES[user.locale].Profile.Agreement}
           value={agreement}
           handler={setAgreement}
           error={!agreement}
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
