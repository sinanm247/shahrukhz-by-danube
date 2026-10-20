import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendContactFormEmail } from "../../../Utils/emailService";

import './PopupForm.scss';
import logo from "../../../Assets/Logo/Shahrukz-by-Danube-Logo.png";
import image from "../../../Assets/Banners/Image-1.webp";
import brochure from "../../../Assets/Common/Shahrukz-by-Danube-Brochure.pdf";
import floorplan from "../../../Assets/Common/Floorplan.pdf";
import pricelist from "../../../Assets/Common/Pricelist.pdf";
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { TextField, MenuItem } from '@mui/material';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from 'react-toastify';
import { floorPlanOptions } from "../../../Utils/floorPlans";

const downloadAsset = (file, filename) => {
  const link = document.createElement('a');
  link.href = file;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloads = {
  floorplan: {
    file: floorplan,
    filename: "Shahrukhz-Floor-Plan.pdf",
    title: "Download Floor Plan",
    button: "Download Floor Plan",
    toast: "Thank you! Your floor plan is downloading...",
    source: "Floor Plan Download Popup",
  },
  pricelist: {
    file: pricelist,
    filename: "Shahrukhz-Price-List.pdf",
    title: "Download Price List",
    button: "Download Price List",
    toast: "Thank you! Your price list is downloading...",
    source: "Price List Download Popup",
  },
  brochure: {
    file: brochure,
    filename: "Shahrukz-by-Danube-Brochure.pdf",
    title: "Download Brochure & Payment Plan",
    button: "Download Brochure",
    toast: "Thank you! Your brochure is downloading...",
    source: "Brochure Download Popup",
  },
};

function PopupForm({ handleClose, isBrochureDownload = true, initialConfiguration = "", downloadType = "brochure" }) {
  const asset = downloads[downloadType] || downloads.brochure;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    configuration: initialConfiguration,
  });

  const [formErrors, setFormErrors] = useState({});
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const errors = {};

  const validateErrors = () => {
    if (formData?.name?.trim()?.length === 0) errors.name = "Name is Required";
    if (formData?.phone?.trim()?.length === 0) errors.phone = "Phone No is Required";
    if (formData?.email?.trim()?.length === 0) errors.email = "Email is Required";
    if (formData?.message?.trim()?.length === 0) errors.message = "Message is Required";
  };

  const handleUpdate = (field) => (event) => {
    const inputValue = event.target.value;
    setFormData((prev) => ({ ...prev, [field]: inputValue }));
  };

  const handleSendEmail = async (formData) => {
    setIsLoading(true);
    setResponse("");
    // --- Email service commented out - uncomment when needed ---
    const formDataWithSource = {
      ...formData,
      source: asset.source
    };
    try {
      const result = await sendContactFormEmail(formDataWithSource);
      if (result.success) {
        setResponse("Email sent successfully!");
        toast.success(asset.toast);
        downloadAsset(asset.file, asset.filename);
        setFormData({ name: '', phone: '', email: '', message: '', configuration: '' });
        setFormErrors({});
        handleClose();
        setTimeout(() => navigate("/thank-you"), 3000);
      } else {
        setResponse("Failed to send email. Please try again.");
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setResponse("Failed to send email. Please try again.");
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
    // --- End commented block ---

    // For now: navigate to thank-you page directly (no email sent)
    // setResponse("Email sent successfully!");
    // toast.success("Thank you! Your brochure is downloading...");
    // downloadBrochure();
    // setFormData({ name: '', phone: '', email: '', message: '', configuration: '' });
    // setFormErrors({});
    // handleClose();
    // setTimeout(() => navigate("/thank-you"), 2000);
    // setIsLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateErrors();

    if (Object.keys(errors).length === 0) {
      handleSendEmail(formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="popup-modal-overlay"
        onClick={handleClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="popup-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="closeButton" onClick={handleClose}>
            <IoClose />
          </button>

          <div className="popup-background">
            <img src={image} alt="Shahrukhz by Danube" />
            <div className="background-overlay"></div>
          </div>

          <div className="popup-content">
            <div className="popup-header">
              <img src={logo} alt="Shahrukhz by Danube" className="popup-logo" />
              <h1 className="popup-title">{asset.title}</h1>
              {/* <p className="popup-subtitle">
                Share your details to receive the Shahrukhz by Danube brochure and payment plan. Offices on Sheikh Zayed Road, starting from AED 1.65M.
              </p> */}
            </div>

            <form onSubmit={handleFormSubmit} className="popup-form">
              <TextField 
                label="Name" 
                variant="outlined" 
                value={formData.name} 
                onChange={handleUpdate('name')} 
                fullWidth 
                className="form-field" 
                required 
              />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}

              <PhoneInput
                country={"ae"}
                value={formData.phone}
                onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                inputProps={{ name: "phone", required: true }}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "20px",
                  paddingLeft: "50px",
                  fontSize: "16px",
                  fontFamily: '"Anek Latin", sans-serif',
                  background: "transparent",
                  color: "white",
                  transition: "all 0.3s ease",
                }}
                buttonStyle={{
                  border: "none",
                  borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "20px 0 0 20px",
                  backgroundColor: "transparent",
                }}
                containerStyle={{ width: "100%" }}
                dropdownStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  color: "white",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                searchStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
              {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}

              <TextField 
                label="Email" 
                variant="outlined" 
                value={formData.email} 
                onChange={handleUpdate('email')} 
                fullWidth 
                className="form-field" 
                required 
              />
              {formErrors.email && <div className="error-message">{formErrors.email}</div>}

              <TextField 
                select 
                label="Configuration" 
                variant="outlined" 
                value={formData.configuration} 
                onChange={handleUpdate('configuration')} 
                fullWidth 
                className="form-field"
              >
                {floorPlanOptions.map((plan) => (
                  <MenuItem key={plan} value={plan}>
                    {plan}
                  </MenuItem>
                ))}
              </TextField>

              <TextField 
                label="Message" 
                variant="outlined" 
                multiline 
                rows={2} 
                value={formData.message} 
                onChange={handleUpdate('message')} 
                fullWidth 
                className="form-field" 
                required 
              />
              {formErrors.message && <div className="error-message">{formErrors.message}</div>}

              <button type="submit" className="btn btn-glass" disabled={isLoading}>
                {isLoading ? "Sending..." : asset.button}
              </button>
              {response && (
                <div className={`response-message ${response.includes("successfully") ? "success" : "error"}`}>
                  {response}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PopupForm;
