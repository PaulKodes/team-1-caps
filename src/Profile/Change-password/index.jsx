import React, { useState } from "react";

function ChangePass() {
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthClass, setPasswordStrengthClass] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(false);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const rePassword = document.getElementById("re-password").value;

    // Check if password meets strength requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isStrongPassword = passwordRegex.test(password);

    // Update password strength indicator
    let passwordStrength = "";
    let passwordStrengthClass = "";
    if (password.length === 0) {
      passwordStrength = "";
      passwordStrengthClass = "";
    } else if (password.length < 8 || !isStrongPassword) {
      passwordStrength = "* Password strength: Weak";
      passwordStrengthClass = "profile-passStrength text-danger";
    } else {
      passwordStrength = "* Password strength: Strong";
      passwordStrengthClass = "profile-passStrength text-success";
    }

    setPasswordStrength(passwordStrength);
    setPasswordStrengthClass(passwordStrengthClass);
    setPasswordsMatch(password === rePassword);
    setIsStrongPassword(isStrongPassword);
  };

  const handleRePasswordChange = (event) => {
    const password = document.getElementById("new-password").value;
    const rePassword = event.target.value;
    setPasswordsMatch(password === rePassword);
  };

  return (
    <>
      <div className="profile-header container my-3 p-4 border">
        <h3>Change Password</h3>
        <hr />
        {/* Old Pass */}
        <div className="form-group row mb-3">
          <label htmlFor="old-password" className="col-sm-2 col-form-label">
            Old Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              maxLength="8"
              className="form-control"
              id="old-password"
            />
          </div>
        </div>
        {/* New Pass */}
        <div className="form-group row mb-3">
          <label htmlFor="new-password" className="col-sm-2 col-form-label ">
            New Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              maxLength="8"
              className="form-control"
              id="new-password"
              onChange={handlePasswordChange}
            />
            <p className={passwordStrengthClass}>{passwordStrength}</p>
          </div>
        </div>
        {/* Confirm Pass */}
        <div className="form-group row mb-3">
          <label htmlFor="re-password" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              maxLength="8"
              className="form-control"
              id="re-password"
              onChange={handleRePasswordChange}
            />
            {!passwordsMatch && (
              <p className="profile-passNotMatch">* Password does not match.</p>
            )}
          </div>
        </div>
        {/* Save Button */}
        <div className="text-end">
          <button className="btn btn-warning mt-5 w-25 text-light">Save</button>
        </div>
      </div>
    </>
  );
}

export default ChangePass;