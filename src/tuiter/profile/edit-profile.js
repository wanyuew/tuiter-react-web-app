import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditProfileInputComponent from "./edit-profile-item";
import './index.css';
import moment from 'moment';
import { updateProfile } from "./profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfileComponent = () => {
    const savedProfile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [profile, setProfile] = useState(savedProfile);

    const updateProfileHandler = (event) => {
        console.log(profile);
        dispatch(updateProfile(profile));
        event.preventDefault();
        navigate('/tuiter/profile')
    }

    const handleNameInputChange = (event) => {
        const name = event.target.value;
        console.log(name)
        const [firstName, lastName = ""] = name.split(" ");
        setProfile({
            ...profile,
            firstName,
            lastName
        })
    }

    const handleInputChange = (event, fieldName) => {
        const { value } = event.target;
        console.log(value, fieldName)
        setProfile({
            ...profile,
            [fieldName]: value,
        })
    }

    return (
        <div className='wd-profile-container'>
            <form onSubmit={updateProfileHandler}>
                <div className='wd-edit-profile-header-container'>
                    <div className="wd-profile-header ">
                        <Link to="/tuiter/profile" className="wd-close-icon">
                            {/* TODO fix icon */}
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </Link>

                        <div className='wd-profile-name'>
                            Edit Profile
                        </div>
                    </div>
                    <div>
                        <input className="wd-profile-save-btn" type="submit" value="Save" />
                    </div>
                </div>
                <div className='wd-picture-container'>
                    <div>
                        <div className='wd-banner-picture'>
                            <img src={`/images/${profile.bannerPicture}`} alt="Banner" height="200px" width="100%" />
                        </div>
                        <div className='wd-profile-picture'>
                            <img src={`/images/${profile.profilePicture}`} alt="Profile" height="150px" width="150px" />
                        </div>
                    </div>
                </div>
                <div>

                    <EditProfileInputComponent
                        handleInputChange={handleNameInputChange}
                        value={profile.firstName + `${profile.lastName ? " " + profile.lastName : ""}`}
                        label="Name"
                    />
                    <EditProfileInputComponent
                        handleInputChange={(event) => handleInputChange(event, "bio")}
                        value={profile.bio}
                        label="Bio"
                    />

                    <EditProfileInputComponent
                        handleInputChange={(event) => handleInputChange(event, "location")}
                        value={profile.location}
                        label="Location"
                    />

                    <EditProfileInputComponent
                        handleInputChange={(event) => handleInputChange(event, "website")}
                        value={profile.website}
                        label="Website"
                    />
                    <EditProfileInputComponent
                        handleInputChange={(event) => handleInputChange(event, "website")}
                        value={profile.website}
                        label="Website"
                    />
                    {/* TODO validate date format */}
                    <EditProfileInputComponent
                        handleInputChange={(event) => handleInputChange(event, "dateOfBirth")}
                        value={moment(profile.dateOfBirth).format('YYYY-MM-DD')}
                        label="Birth Date"
                        inputType="date"
                    />
                    <div>
                        Switch to professional
                    </div>

                </div>
            </form>
        </div>
    )
}

export default EditProfileComponent;