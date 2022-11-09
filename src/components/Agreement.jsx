import { useState, useContext, useEffect } from "react";
import { LANGUAGES } from "../constants";
import { AppContext } from "../context";
import Modal from 'react-modal';

const Agreement = ({ placeholder, value, handler, showTooltip }) => {
  const { state } = useContext(AppContext);
  const [checked, setChecked] = useState("");
  const [modalOpen, setModalOpen] = useState();
  
  useEffect(() => {
    setModalOpen(false);
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal(){
    setModalOpen(false);
  }

  function handleCheckbox(e) {
    if(e == 'on') {
        if(!checked || checked === '') {
            setChecked('checked');
            handler(true);
        } else {
            setChecked('');
            handler(false);
        }
    } else {
        setChecked('');
        handler(false);
    }
  }



  return (
    
    <div> 
      <fieldset>
      <legend className="sr-only">Checkbox variants</legend>
        <div className="flex items-center items-start mb-4">
            <input id="checkbox" aria-describedby="checkbox" onChange={(e) => handleCheckbox(e.target.value)} type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={checked}/>
            <label className="text-sm ml-3 font-medium text-gray-900">{LANGUAGES[state.lang].Profile.Agree} <a href="#" onClick={openModal} className="text-blue-600 hover:underline">{LANGUAGES[state.lang].Profile.TermsConditions} </a></label>
        </div>
      </fieldset>

    
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
          <button onClick={closeModal} className="bg-indigo-500 cursor-pointer hover:bg-amber-500 hover:shadow-md focus:bg-amber-500 focus:shadow-md focus:outline-none focus:ring-0 active:bg-amber-500 active:shadow-md inline-block px-2 py-2 text-white font-medium uppercase rounded shadow-md transition duration-150 ease-in-out w-full">{LANGUAGES[state.lang].Close}</button>
          <div>{LANGUAGES[state.lang].Profile.TermsConditions}</div>
       </Modal>
    
    </div>


  );
};

export default Agreement;
