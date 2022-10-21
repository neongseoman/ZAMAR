import React from 'react';

// import {
//     Section,
//     Header,
//     HeaderButton
// } from './mainComponent.styles'
import './LoginModal.css'

// function LogInModal({open, close, header}) {
//     return (
//         <div className={open?'openModal modal':'modal'}>
//             {open
//                 ?
//                 (
//                     <Section>
//                         <Header>
//                             {header}
//                             <HeaderButton className="close" onClick={close}>
//                             </HeaderButton>
//                         </Header>
//                     </Section>
//                 )
//                 :
//                 null
//             }
//         </div>
//     );
// }
const LogInModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        {/*{props.children}*/}
                        <div className="loginContainer">
                            {/*sign up*/}
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required/>

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>

                            <button className="signUpButton" type="submit">Sign Up</button>


                            {/*sign In*/}
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required/>

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>

                            <button className="signInButton" type="submit">Sign In</button>

                            <span className="psw">Forgot <a href="#">password?</a></span>

                        </div>
                    </main>
                    {/*<footer>*/}
                    {/*    <div className="loginOptionContainer">*/}
                    {/*        <button className="close" onClick={close}>*/}
                    {/*            close*/}
                    {/*        </button>*/}


                    {/*    </div>*/}
                    {/*</footer>*/}
                </section>
            ) : null}
        </div>
    );
};

export default LogInModal;