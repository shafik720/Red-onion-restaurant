import React from 'react';
import './SocialSignIn.css';
import googleLogo from '../../utilities/images/icons/google.svg';
import githubLogo from '../../utilities/images/icons/github.svg';
import twitterLogo from '../../utilities/images/icons/twitter.svg';

const SocialSignIn = (props) => {
    let signInWithGoogle = props.signInWithGoogle;
    return (
        <div>
            <div className="external-signIn-div mb-4">
                    <div className="orDiv">
                        <hr />
                        <p>Or Sign in using</p>
                    </div>
                    <p className='text-center'></p>
                    <div className="social-signIn">
                    <div draggable onClick={signInWithGoogle} className="google-signIn">
                        <img src={googleLogo} alt="" />
                    </div>
                    <div className="google-signIn">
                        <img src={githubLogo} alt="" />
                    </div>
                    <div className="google-signIn">
                        <img src={twitterLogo} alt="" />
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default SocialSignIn;