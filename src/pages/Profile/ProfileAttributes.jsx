import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../context";
import { LANGUAGES, PROVINCES, COUNTRY } from "../../constants";
import Mudations from "../../api/mutations";
import { Button, Form, Input, Select, Hotels, Phone, Picture, Agreement } from "../../components";


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
  const [hotel, setHotel] = useState("");
  const [phone, setPhone] = useState("");
  const [banking, setBanking] = useState("");
  const [transit, setTransit] = useState("");
  const [account, setAccount] = useState("");
  const [image, setImage] = useState("");
  //const [shortId, setShortId] = useState("");
  const [ext, setExt] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [verified, setVerified] = useState(false);


  const hotels = [
    { label: 'Hôtel Palace Royal', value: 'jaro_palace_royal' },
    { label: 'Hôtel Plaza Québec', value: 'jaro_palace_royal' },
    { label: 'Hôtel Québec Inn – Aéroport de Québec', value: 'jaro_palace_royal' },
    { label: 'Hôtel Must – Aéroport de Québec', value: 'jaro_must' },
    { label: 'Hôtel Lindbergh (Place Laurier)', value: 'jaro_lindberg' },
    { label: 'Auberge Québec', value: 'jaro_auberge_quebec' },
  ];


  const handleAccount = event => {
    //const result = event.target.value.replace(/\D/g, '');

    if (isNaN(event) || event < 0) {
    } else {
      setAccount(event);
    }
  };

  const handleBankNumber = event => {
    if (isNaN(event) || event < 0 || event.length > 3) {
    } else {
      setBanking(event);
    }
  };

  const handleTransitNumber = event => {

    if (isNaN(event) || event < 0) {
    } else {
      setTransit(event);
    }
  };


  /** Fill the form */
  useEffect(() => {
    /** DEFAULT VALUES */
    setProvince("qc");
    setCountry("CA");
    /** */
    if (user) {
      console.log("User from DB " + JSON.stringify(user));

      setFirstName(user?.firstName || "");
      setLastName(user?.lastName || "");
      setAddress(user?.address || "");
      setCity(user?.city || "");
      setPostalCode(user?.postalCode || "");
      setProvince(user?.province || "");
      setPhone(user?.phone || "");
      setCountry(user?.country || "");
      setAgreement(user?.agreement || false);
      setBanking(user?.banking || "");
      setTransit(user?.transit || "");
      setAccount(user?.account || "");
      setImage(user?.image || "");
      setHotel(user?.hotel || "");
      setExt(user?.ext || false);
      setVerified(user?.verified || false);
    }
  }, [user]);



  const loading = () => {
    setAlert();
    setLoading(true);
  };

  const handleAttributes = async () => {
    loading();
    try {
      //console.log('Before updating current user ' + JSON.stringify(user));
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
        agreement: agreement,
        banking: banking,
        transit: transit,
        account: account,
        image: image,
        hotel: hotel,
        verified: verified,
        ext: ext
      });
      //console.log('After update' + JSON.stringify(user));
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
  const disabledBankingAttributes = () => !banking || !transit || !account;
  const disableHotelAttribute = () => !hotel;

  return (
    <form action="#" method="POST">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{LANGUAGES[user.locale].Profile.PersonalInfoTitle}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {LANGUAGES[user.locale].Profile.PersonalInfoText}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">

            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">

                {/** Profile Picture */}
                <Picture
                  handler={setImage}
                />

                {/** Profile Infos */}
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.FirstName}</label>
                    <Input
                      type="text"
                      placeholder={LANGUAGES[user.locale].Profile.FirstName}
                      value={firstName}
                      handler={setFirstName}
                      error={!firstName}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.LastName}</label>
                    <Input
                      type="text"
                      placeholder={LANGUAGES[user.locale].Profile.LastName}
                      value={lastName}
                      handler={setLastName}
                      error={!lastName}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.Country}</label>
                    <Select value={country} handler={setCountry}>
                      {Object.keys(COUNTRY).map((l) => (
                        <option key={l} value={l}>
                          {LANGUAGES[user.locale].Profile.CountryList[l]}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.Phone}</label>
                    <Phone
                      placeholder={LANGUAGES[user.locale].Profile.Phone}
                      value={phone}
                      handler={setPhone}
                      error={!phone}
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.Address}</label>
                    <Input
                      type="text"
                      placeholder={LANGUAGES[user.locale].Profile.Address}
                      value={address}
                      handler={setAddress}
                      error={!address}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.City}</label>
                    <Input
                      type="text"
                      placeholder={LANGUAGES[user.locale].Profile.City}
                      value={city}
                      handler={setCity}
                      error={!city}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.Province}</label>
                    <Select value={province} handler={setProvince}>
                      {Object.keys(PROVINCES).map((l) => (
                        <option key={l} value={l}>
                          {LANGUAGES[user.locale].Profile.Provinces[l]}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.PostalCode}</label>
                    <Input
                      type="text"
                      placeholder={LANGUAGES[user.locale].Profile.PostalCode}
                      value={postalCode}
                      handler={setPostalCode}
                      error={!postalCode}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Agreement
                      value={agreement}
                      handler={setAgreement}
                      error={!agreement}
                    />
                  </div>
                </div>
              </div>

              <Button
                text={LANGUAGES[user.locale].Profile.ChangeAttributes}
                disabled={disabledAttributes()}
                handler={() => handleAttributes()}
                full
              />

            </div>

          </div>
        </div>

        {/** */}
        <div className="md:grid md:grid-cols-3 md:gap-6 childInfoBlock">

          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{LANGUAGES[user.locale].Profile.HotelInfoTitle}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {LANGUAGES[user.locale].Profile.HotelInfoText}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">


                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="banking" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.HotelName}</label>

                  <Hotels
                    handler={setHotel}
                    value={hotels.filter(function(option) {
                      return option.value === hotel;
                    })}
                    options={hotels}
                  />

                </div>

              </div>
              <Button
                text={LANGUAGES[user.locale].Profile.ChangeHotel}
                disabled={disableHotelAttribute()}
                handler={() => handleAttributes()}
                full
              />
            </div>

          </div>

        </div>
        {/** */}

        <div className="md:grid md:grid-cols-3 md:gap-6 childInfoBlock">

          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{LANGUAGES[user.locale].Profile.BankingInfoTitle}</h3>
              <p className="mt-1 text-sm text-gray-600">
                {LANGUAGES[user.locale].Profile.BankingInfoText}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">


                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="banking" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.FinantialInformationNumber}</label>
                  <Input
                    type="text"
                    placeholder={LANGUAGES[user.locale].Profile.FinantialInformationNumber}
                    value={banking}
                    handler={handleBankNumber}
                    error={!banking}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="transit" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.FinantialTransitNumber}</label>
                  <Input
                    type="text"
                    placeholder={LANGUAGES[user.locale].Profile.FinantialTransitNumber}
                    value={transit}
                    handler={handleTransitNumber}
                    error={!transit}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="account" className="block text-sm font-medium text-gray-700">{LANGUAGES[user.locale].Profile.FinantialAccountNumber}</label>
                  <Input
                    type="text"
                    placeholder={LANGUAGES[user.locale].Profile.FinantialAccountNumber}
                    value={account}
                    handler={handleAccount}
                    error={!account}
                  />
                </div>


                <div>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <img src={`./cheque-${LANGUAGES[user.locale].lang}.png`} alt="" />
                  </div>
                </div>
              </div>
              <Button
                text={LANGUAGES[user.locale].Profile.ChangeBanking}
                disabled={disabledBankingAttributes()}
                handler={() => handleAttributes()}
                full
              />
            </div>

          </div>

        </div>





      </div>
    </form>
  );
};

export default ProfileAttributes;
