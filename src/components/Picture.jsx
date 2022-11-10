import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context";
import { Storage } from "aws-amplify";
import { LANGUAGES } from "../constants";

Storage.configure({ level: 'private' });

const Picture = () => {
  const { state } = useContext(AppContext);
  const { user } = state;

  useEffect(() => {
    if (user) {
      //console.log("User from DB in picture" + JSON.stringify(user));
      setImage(user?.image || "");
      const getProfilePicture = () => {
        let imgName = user.id + ".jpeg";
        //console.log('Image name ' + imgName);
        Storage.get(imgName)
          .then(url => {
            var myRequest = new Request(url);
            fetch(myRequest).then(function(response) {
              if (response.status === 200) {
                //console.log('Image Url ' + url);
                setImage(url);
              }
            });
          })
          .catch(err => console.log(err));
      };
      getProfilePicture();
    }
  }, [user]);

  const [image, setImage] = useState("");



  const onProcessFile = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    }
    reader.onloadend = () => {
      setImage(reader.result);
    };
    //console.log('Image has been sent ' + image);
    Storage.put(user.id + ".jpeg", file, {
      level: "private",
      contentType: "image/jpeg"
    })
      .then(result => console.log('Success ' + result))
      .catch(err => console.log(err));
  };


  return (
    <div className="relative">
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384"/>
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
              {LANGUAGES[state.lang].Profile.ImageText}
              </p>
            </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
            <label onChange={onProcessFile} htmlFor="formId">
              <input name="" type="file" id="formId" hidden />
              <span role="button">
              <img src="./upload.png" className="profileIcon" alt="{LANGUAGES[state.lang].Profile.UploadImage}"/>
              {LANGUAGES[state.lang].Profile.UploadImage}
              </span>
          </label>
            </div>
          </figcaption>
          </div>
          </figure>

    </div>

  );
};

export default Picture;
