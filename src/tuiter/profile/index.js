import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import './index.css';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className='wd-profile-container'>
            <div className='wd-profile-header'>
                {/* TODO whats the use of back */}
                <i className="fa-solid fa-arrow-left-long wd-back"></i>
                <div>
                    <div className='wd-profile-name'>
                        {profile.firstName} {profile.lastName}
                    </div>
                    <div className='wd-profile-tweet-count'>
                        {profile.tweetCount} Tweets
                    </div>
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
                <div className='wd-edit-profile-btn-container'>
                    <Link className='wd-edit-profile-btn' to="/tuiter/edit-profile">
                        Edit Profile
                    </Link>
                </div>
            </div>
            <div className='wd-profile-name'>
                {profile.firstName} {profile.lastName}
            </div>
            <div className='wd-profile-handle'>
                {profile.handle}
            </div>
            <div className='wd-profile-bio'>
                {profile.bio}
            </div>
            <div className='wd-profile-additional-icons-container'>
                <div className='wd-profile-additional-info-container'>
                    <div className='wd-profile-icon'>

                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className='wd-profile-additional-info-text'>
                        {profile.location}
                    </div>
                </div>
                <div className='wd-profile-additional-info-container'>
                    <div className='wd-profile-icon'>

                        <i className="bi bi-balloon"></i>
                    </div>
                    <div className='wd-profile-additional-info-text'>
                        {new Date(profile.dateOfBirth).toDateString()}
                    </div>
                </div>
                <div className='wd-profile-additional-info-container'>
                    <div className='wd-profile-icon'>
                        <i className="bi bi-calendar3"></i>
                    </div>
                    <div className='wd-profile-additional-info-text'>
                        Joined {moment(profile.dateJoined, "MM/YYYY").format("MMMM YYYY")}
                    </div>
                </div>
            </div>
            <div className='wd-count-container'>
                <div className='wd-count-item'>
                    <b>{profile.followingCount}</b> <span className='wd-count-item-text'>Following</span>
                </div>

                <div className='wd-count-item'>
                    <b>{profile.followersCount}</b> <span className='wd-count-item-text'> Followers</span>
                </div>
            </div>
        </div >
    )
}

export default ProfileComponent;