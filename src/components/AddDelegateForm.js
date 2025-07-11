import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
const CompanyRegistrationForm = () => {
  const navigate = useNavigate();
  const [delegateCount, setDelegateCount] = useState(1);
  const [delegates, setDelegates] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      mobile: "",
    },
  ]);

  const [companyData, setCompanyData] = useState({
    companyName: "",
    webAddress: "",
    address: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [termsAgreement, setTermsAgreement] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Get country options from react-select-country-list
  const countryOptions = [
    { value: "", label: "Select a country" },
    ...countryList().getData(),
  ];

  // Handle company data changes
  const handleCompanyDataChange = (field, value) => {
    setCompanyData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  // Handle delegate data changes
  const handleDelegateChange = (delegateId, field, value) => {
    setDelegates((prev) =>
      prev.map((delegate) =>
        delegate.id === delegateId ? { ...delegate, [field]: value } : delegate
      )
    );

    // Clear validation error for this field
    const errorKey = `delegate_${delegateId}_${field}`;
    if (validationErrors[errorKey]) {
      setValidationErrors((prev) => ({
        ...prev,
        [errorKey]: false,
      }));
    }
  };

  // Add new delegate (copy of first delegate structure)
  const addDelegate = () => {
    const newDelegateId = delegateCount + 1;
    const newDelegate = {
      id: newDelegateId,
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      mobile: "",
    };

    setDelegates((prev) => [...prev, newDelegate]);
    setDelegateCount(newDelegateId);
  };

  // Remove delegate
  const removeDelegate = (delegateId) => {
    setDelegates((prev) =>
      prev.filter((delegate) => delegate.id !== delegateId)
    );
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    // Validate company data
    const requiredCompanyFields = [
      "companyName",
      "address",
      "country",
      "city",
      "postalCode",
    ];
    requiredCompanyFields.forEach((field) => {
      if (!companyData[field] || !companyData[field].trim()) {
        errors[field] = true;
      }
    });

    // Validate delegates
    delegates.forEach((delegate) => {
      const requiredDelegateFields = [
        "firstName",
        "lastName",
        "position",
        "email",
        "mobile",
      ];
      requiredDelegateFields.forEach((field) => {
        if (!delegate[field] || !delegate[field].trim()) {
          errors[`delegate_${delegate.id}_${field}`] = true;
        }
      });

      // Email validation
      if (delegate.email && !isValidEmail(delegate.email)) {
        errors[`delegate_${delegate.id}_email`] = true;
      }
    });

    // Terms agreement validation
    if (!termsAgreement) {
      errors.termsAgreement = true;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Email validation helper
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        company: companyData,
        delegates: delegates,
        termsAgreement: termsAgreement,
      };

      console.log("Form submitted with data:", formData);
      alert("Form submitted successfully! Check console for data.");

      // Here you would typically send the data to your server
      // submitFormData(formData);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <style jsx>{`
        .form-section-header {
          background-color: #e5e7eb;
          color: #374151;
          font-weight: 600;
          padding: 12px 20px;
          margin-bottom: 0;
          border-radius: 8px 8px 0 0;
        }

        .form-section-content {
          background-color: white;
          padding: 30px 20px;
          border-radius: 0 0 8px 8px;
          border: 1px solid #e5e7eb;
          border-top: none;
        }

        /* Common styles for input containers to ensure consistent height */
        .input-container {
          position: relative;
          padding-top: 20px; /* Space for the floating/static label */
          margin-bottom: 20px; /* Space between input groups */
        }

        /* Floating Label Input Styles */
        .floating-label {
          position: absolute;
          left: 0;
          top: 20px; /* Initial position: aligned with input text */
          color: #6b7280;
          font-weight: 500;
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .floating-input,
        .floating-select {
          border: none;
          border-bottom: 2px solid #d1d5db;
          border-radius: 0;
          padding: 8px 0; /* Padding for text */
          background: transparent;
          transition: border-color 0.3s ease;
          width: 100%;
          outline: none;
          font-size: 16px;
        }

        .floating-input:focus {
          border-bottom-color: #3b82f6;
          box-shadow: none;
          background: transparent;
        }

        .floating-input:focus + .floating-label,
        .floating-input:not(:placeholder-shown) + .floating-label,
        .floating-input.has-value + .floating-label {
          top: 0px; /* Move to top */
          font-size: 12px;
          color: #3b82f6;
        }

        /* Country Select without floating label */
        .country-select-group {
          position: relative; /* Needed for consistent padding-top */
          padding-top: 20px; /* Align with other inputs */
          margin-bottom: 20px;
        }

        .floating-select {
          border: none;
          border-bottom: 2px solid #d1d5db;
          border-radius: 0;
          padding: 8px 0;
          background: transparent;
          transition: border-color 0.3s ease;
          width: 100%;
          outline: none;
          font-size: 16px;
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0 center;
          background-repeat: no-repeat;
          background-size: 16px 12px;
          padding-right: 20px;
        }

        .floating-select:focus {
          border-bottom-color: #3b82f6;
          box-shadow: none;
          background: transparent;
        }

        .floating-input.is-invalid,
        .floating-select.is-invalid {
          border-bottom-color: #dc3545 !important;
        }

        .floating-input.is-invalid + .floating-label {
          color: #dc3545 !important;
        }

        .btn-add-delegate {
          background-color: #1f2937;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          transition: background-color 0.3s ease;
          cursor: pointer;
        }

        .btn-add-delegate:hover {
          background-color: #111827;
        }

        .btn-submit {
          background-color: #1f2937;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          font-weight: 500;
          min-width: 120px;
          cursor: pointer;
        }

        .btn-submit:hover {
          background-color: #111827;
        }

        .delegate-section {
          margin-bottom: 20px;
        }

        .remove-delegate-btn {
          background-color: #dc3545;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .remove-delegate-btn:hover {
          background-color: #c82333;
        }

        .delegate-header {
          display: flex;
          align-items: center;
          background-color: #e5e7eb;
          border-radius: 8px 8px 0 0;
        }

        .delegate-title {
          flex: 1;
          color: #374151;
          font-weight: 600;
          padding: 12px 20px;
          margin: 0;
        }

        .terms-link {
          color: #3b82f6;
          text-decoration: underline;
        }

        .terms-link:hover {
          color: #2563eb;
        }

        .form-check-input {
          margin-right: 8px;
        }

        /* Mobile input with static label at top and consistent height */
        .mobile-input-group {
          position: relative;
          padding-top: 20px; /* Space for the static label */
          margin-bottom: 20px; /* Space between input groups */
        }

        .mobile-static-label {
          position: absolute;
          left: 0;
          top: 0px; /* Always at top */
          color: #6b7280;
          font-weight: 500;
          font-size: 12px; /* Smaller font size */
          z-index: 1;
        }

        .mobile-static-label.error {
          color: #dc3545;
        }

        .PhoneInput {
          display: flex;
          align-items: flex-end; /* Align content to the bottom */
          width: 100%;
        }

        .PhoneInputInput {
          border: none;
          border-bottom: 2px solid #d1d5db;
          border-radius: 0;
          padding: 8px 0; /* Consistent padding */
          background: transparent;
          transition: border-color 0.3s ease;
          width: 100%;
          outline: none;
          font-size: 16px;
          font-family: inherit;
        }

        .PhoneInputInput:focus {
          border-bottom-color: #3b82f6;
          box-shadow: none;
          background: transparent;
        }

        .PhoneInputInput.is-invalid {
          border-bottom-color: #dc3545 !important;
        }

        .PhoneInputCountrySelect {
          border: none;
          border-bottom: 2px solid #d1d5db;
          border-radius: 0;
          padding: 8px 0; /* Consistent padding */
          background: transparent;
          transition: border-color 0.3s ease;
          margin-right: 10px;
          outline: none;
          font-size: 16px;
          font-family: inherit;
        }

        .PhoneInputCountrySelect:focus {
          border-bottom-color: #3b82f6;
          box-shadow: none;
          background: transparent;
        }

        .PhoneInputCountryIcon {
          margin-right: 5px;
        }

        .PhoneInputCountrySelectArrow {
          margin-left: 5px;
        }

        @media (max-width: 768px) {
          .form-section-content {
            padding: 20px 15px;
          }
        }
      `}</style>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#181818",
          display: "flex",
          justifyContent: "center",
          minHeight: "70px",
          width: "100%",
        }}
      >
        <div
          className="container mx-auto "
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://www.desalination-resource-recovery.com/api/images/logo/1742534509561.png"
            alt="Site logo"
            style={{ cursor: "pointer", width: "140px" }}
            onClick={() => navigate("/")}
          ></img>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 mb-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Details Section */}
              <div className="form-section">
                <h3 className="form-section-header">Company details</h3>
                <div className="form-section-content">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-container">
                      {" "}
                      {/* Changed from floating-label-group */}
                      <input
                        type="text"
                        className={`floating-input ${
                          validationErrors.companyName ? "is-invalid" : ""
                        } ${companyData.companyName ? "has-value" : ""}`}
                        id="companyName"
                        value={companyData.companyName}
                        onChange={(e) =>
                          handleCompanyDataChange("companyName", e.target.value)
                        }
                        placeholder=" "
                        required
                      />
                      <label htmlFor="companyName" className="floating-label">
                        Company name
                      </label>
                    </div>
                    <div className="input-container">
                      {" "}
                      {/* Changed from floating-label-group */}
                      <input
                        type="url"
                        className={`floating-input ${
                          companyData.webAddress ? "has-value" : ""
                        }`}
                        id="webAddress"
                        value={companyData.webAddress}
                        onChange={(e) =>
                          handleCompanyDataChange("webAddress", e.target.value)
                        }
                        placeholder=" "
                      />
                      <label htmlFor="webAddress" className="floating-label">
                        Web address
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-container">
                      {" "}
                      {/* Changed from floating-label-group */}
                      <input
                        type="text"
                        className={`floating-input ${
                          validationErrors.address ? "is-invalid" : ""
                        } ${companyData.address ? "has-value" : ""}`}
                        id="address"
                        value={companyData.address}
                        onChange={(e) =>
                          handleCompanyDataChange("address", e.target.value)
                        }
                        placeholder=" "
                        required
                      />
                      <label htmlFor="address" className="floating-label">
                        Address
                      </label>
                    </div>
                    <div className="country-select-group">
                      {" "}
                      {/* This group remains as is, but now has padding-top */}
                      <select
                        className={`floating-select ${
                          validationErrors.country ? "is-invalid" : ""
                        }`}
                        id="country"
                        value={companyData.country}
                        onChange={(e) =>
                          handleCompanyDataChange("country", e.target.value)
                        }
                        required
                      >
                        {countryOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="input-container">
                      {" "}
                      {/* Changed from floating-label-group */}
                      <input
                        type="text"
                        className={`floating-input ${
                          validationErrors.city ? "is-invalid" : ""
                        } ${companyData.city ? "has-value" : ""}`}
                        id="city"
                        value={companyData.city}
                        onChange={(e) =>
                          handleCompanyDataChange("city", e.target.value)
                        }
                        placeholder=" "
                        required
                      />
                      <label htmlFor="city" className="floating-label">
                        City
                      </label>
                    </div>
                    <div className="input-container">
                      {" "}
                      {/* Changed from floating-label-group */}
                      <input
                        type="text"
                        className={`floating-input ${
                          companyData.state ? "has-value" : ""
                        }`}
                        id="state"
                        value={companyData.state}
                        onChange={(e) =>
                          handleCompanyDataChange("state", e.target.value)
                        }
                        placeholder=" "
                      />
                      <label htmlFor="state" className="floating-label">
                        State <span className="text-gray-500">(optional)</span>
                      </label>
                    </div>
                    <div className="input-container">
                      {" "}
                      {/* Changed from floating-label-group */}
                      <input
                        type="text"
                        className={`floating-input ${
                          validationErrors.postalCode ? "is-invalid" : ""
                        } ${companyData.postalCode ? "has-value" : ""}`}
                        id="postalCode"
                        value={companyData.postalCode}
                        onChange={(e) =>
                          handleCompanyDataChange("postalCode", e.target.value)
                        }
                        placeholder=" "
                        required
                      />
                      <label htmlFor="postalCode" className="floating-label">
                        Postal/Zip code
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delegates Container */}
              <div id="delegatesContainer">
                {delegates.map((delegate, index) => (
                  <div
                    key={delegate.id}
                    className="form-section delegate-section"
                  >
                    <div className="delegate-header">
                      <h3 className="delegate-title">Delegate {index + 1}</h3>
                      {index > 0 && (
                        <button
                          type="button"
                          className="remove-delegate-btn mr-3"
                          onClick={() => removeDelegate(delegate.id)}
                        >
                          <i className="fas fa-trash-alt mr-1"></i>Delete
                        </button>
                      )}
                    </div>
                    <div className="form-section-content">
                      {/* First row: First name, Last name, Mobile */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="input-container">
                          {" "}
                          {/* Changed from floating-label-group */}
                          <input
                            type="text"
                            className={`floating-input ${
                              validationErrors[
                                `delegate_${delegate.id}_firstName`
                              ]
                                ? "is-invalid"
                                : ""
                            } ${delegate.firstName ? "has-value" : ""}`}
                            id={`firstName${delegate.id}`}
                            value={delegate.firstName}
                            onChange={(e) =>
                              handleDelegateChange(
                                delegate.id,
                                "firstName",
                                e.target.value
                              )
                            }
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor={`firstName${delegate.id}`}
                            className="floating-label"
                          >
                            First name
                          </label>
                        </div>
                        <div className="input-container">
                          {" "}
                          {/* Changed from floating-label-group */}
                          <input
                            type="text"
                            className={`floating-input ${
                              validationErrors[
                                `delegate_${delegate.id}_lastName`
                              ]
                                ? "is-invalid"
                                : ""
                            } ${delegate.lastName ? "has-value" : ""}`}
                            id={`lastName${delegate.id}`}
                            value={delegate.lastName}
                            onChange={(e) =>
                              handleDelegateChange(
                                delegate.id,
                                "lastName",
                                e.target.value
                              )
                            }
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor={`lastName${delegate.id}`}
                            className="floating-label"
                          >
                            Last name
                          </label>
                        </div>
                        <div className="mobile-input-group">
                          {" "}
                          {/* This group remains as is, but now has padding-top */}
                          <label
                            className={`mobile-static-label ${
                              validationErrors[`delegate_${delegate.id}_mobile`]
                                ? "error"
                                : ""
                            }`}
                          >
                            Mobile
                          </label>
                          <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="US"
                            value={delegate.mobile}
                            onChange={(value) =>
                              handleDelegateChange(
                                delegate.id,
                                "mobile",
                                value || ""
                              )
                            }
                            className={
                              validationErrors[`delegate_${delegate.id}_mobile`]
                                ? "is-invalid"
                                : ""
                            }
                            inputComponent={({ className, ...props }) => (
                              <input
                                {...props}
                                className={`PhoneInputInput ${
                                  validationErrors[
                                    `delegate_${delegate.id}_mobile`
                                  ]
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                            )}
                          />
                        </div>
                      </div>

                      {/* Second row: Position, Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="input-container">
                          {" "}
                          {/* Changed from floating-label-group */}
                          <input
                            type="text"
                            className={`floating-input ${
                              validationErrors[
                                `delegate_${delegate.id}_position`
                              ]
                                ? "is-invalid"
                                : ""
                            } ${delegate.position ? "has-value" : ""}`}
                            id={`position${delegate.id}`}
                            value={delegate.position}
                            onChange={(e) =>
                              handleDelegateChange(
                                delegate.id,
                                "position",
                                e.target.value
                              )
                            }
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor={`position${delegate.id}`}
                            className="floating-label"
                          >
                            Position
                          </label>
                        </div>
                        <div className="input-container">
                          {" "}
                          {/* Changed from floating-label-group */}
                          <input
                            type="email"
                            className={`floating-input ${
                              validationErrors[`delegate_${delegate.id}_email`]
                                ? "is-invalid"
                                : ""
                            } ${delegate.email ? "has-value" : ""}`}
                            id={`email${delegate.id}`}
                            value={delegate.email}
                            onChange={(e) =>
                              handleDelegateChange(
                                delegate.id,
                                "email",
                                e.target.value
                              )
                            }
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor={`email${delegate.id}`}
                            className="floating-label"
                          >
                            Email address
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Delegate Button */}
              <div className="mb-4">
                <button
                  type="button"
                  className="btn-add-delegate"
                  onClick={addDelegate}
                >
                  <i className="fas fa-plus mr-2"></i>Add Delegate
                </button>
              </div>

              {/* Terms and Submit Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-start mb-3 md:mb-0">
                  <input
                    type="checkbox"
                    className={`form-check-input ${
                      validationErrors.termsAgreement ? "is-invalid" : ""
                    }`}
                    id="termsAgreement"
                    checked={termsAgreement}
                    onChange={(e) => setTermsAgreement(e.target.checked)}
                    required
                  />
                  <label
                    className="form-check-label ml-2"
                    htmlFor="termsAgreement"
                  >
                    Please tick to confirm your agreement to the{" "}
                    <a href="#" className="terms-link">
                      terms and conditions
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  onClick={() => navigate("/booking-form")}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#181818",
          display: "flex",
          justifyContent: "center",
          height: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1070px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              margin: "0",
              padding: "0",
            }}
          >
            <span>Privacy Policy</span>
            <span class="PageForm_divide__vwhn0">|</span>IQ International PTe.
            LTD
          </p>
          <p
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              margin: "0",
              padding: "0",
            }}
          >
            ©2025 Desalination &amp; Resource Recovery 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationForm;
