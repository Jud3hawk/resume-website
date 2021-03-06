import profilePic from '../../../pictures/me.jpg';
import React from 'react'

function Part1() {
    return (
        <div className='profile-part1'>
            <div className='img-container'>

                <div className='img_pulse-container'>
                    <img src={profilePic} alt='profile_pic' className='main_pic' />
                    <div className='pulse-div'></div>
                    <div className='pulse-color'></div>
                </div>

                <h5 className='part1-mfont-color'>Juan Cortez</h5>
                <p className='part1-font-color'>Front-end Developer</p>
                <p className='part1-font-color'>Ui/UX Designer</p>
            </div>
        </div>
    )
}

export default Part1