'use client'

    import React ,{ useState } from 'react'
    import Script from 'next/script'
    import { signIn } from 'next-auth/react'
    import { useRouter } from 'next/navigation'

    import './style.css'

    
    function login() {
        const [class_name,setClass] = useState(' ');
        const [name,setName] = useState();
        const [email,setEmail] = useState();
        const [password,setPassword] = useState();
        const [errorLogin,setErrorLogin] = useState('');
        const [errorRegister,setErrorRegister] = useState('');
        
        const router = useRouter();


        const handleLogin = async (e) =>{
          e.preventDefault();


          if(!email || !password){
            setErrorLogin("Please enter email and password");


          
        }
        try{
          const res = await signIn('credentials',{email,password,redirect:false});

          if(res.error)
          {
            setErrorLogin("Invalid Credentials");
            return
          }

          router.replace('/')
        }catch(err){
            console.log(err);
      }
    }

        const handleRegister = async (e) =>{
          e.preventDefault();

          if(!name || !email || !password){
            setErrorRegister("Please enter all fields");
            return
          }
            try{
              
             const res = await fetch('/api/user/new',{
                method:'POST',
                headers:{
                  "Content-type":"application/json"
                },
                body:JSON.stringify({name,email,password})
              })
              

              console.log()
              if(res.status === 409)
              {
                setErrorRegister("user alread Exist")
              }
              if (res.ok){
                const form = e.target;
                form.reset()
                setErrorRegister('')
                setClass(' ')
              }

            }catch(e)
            {
              console.log(e)
            }
      }
    
      return (
        <div>
            
          <div className={"container " + class_name}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action='#' onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" onChange={text=> setEmail(text.target.value)} placeholder="Email" value={email} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" onChange={text=> setPassword(text.target.value)} placeholder="Password" value={password}/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
           {errorLogin &&( <div className=' text-meta-7'>
              {errorLogin}
            </div>)}
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" onSubmit={handleRegister} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" onChange={text=> setName(text.target.value)} placeholder="Username" value={name} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" onChange={text=> setEmail(text.target.value)} placeholder="Email" value={email} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" onChange={text=> setPassword(text.target.value)} placeholder="Password" value={password}/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            {errorRegister &&( <div className=' text-meta-7'>
              {errorRegister}
            </div>)}
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={()=>setClass('sign-up-mode')}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={()=>setClass(' ')}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

    <Script src="loginstyle.js"></Script>
    <Script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"></Script>
      </div>
      )
    }
    
    export default login
    