'use client'

import Image from 'next/image'
import Script from 'next/script'
import { signOut , useSession } from 'next-auth/react'

export default function Home() {
    const{data:session} = useSession();

    const scri = `<script src ="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="script.js"></script>`
  return (
        <div>
         <div id="loader">
        <h1>PREDICT</h1>
        <h1>STOCK</h1>
        <h1>WITH AI</h1>
    </div>
    <div id="fixed-image">

    </div>
    


    <div id="main">
        
        <div id="page1">
        <nav>
            <img src="./media/logo.png" height="135px" width="135px" alt=""></img>
            <div id="nav-part2">
                <h4><a href="#">Work</a></h4>
                <h4><a href='/list'>Stock</a></h4>
                <h4><a href="/stockdata">Charts</a></h4>
            {session?.user?.name ? (<button onClick={()=>signOut()}>Log Out</button>) : <a href="/login">Login</a>}
            </div>
                <h3>Menu</h3>
            </nav>
            <div id="center">
                <div id="left">
                    <h3>Unlock the future of smart investing with our Finhawk Plus. With advanced algorithms and real-time market data empowering you to make informed decisions.</h3>
                </div>
                <div id="right">
                    <h1> BEYOND <br/></h1>
                       <h1> THE <br/></h1>
                        <h1> LIMITS </h1>
                </div>
            </div>
            <div id="hero-shape">
                <div id="hero-1"></div>
                <div id="hero-2"></div>
                <div id="hero-3"></div>
                <div id="hero-4"></div>

            </div>
            <video autoPlay muted loop src="./media/video1.mp4"></video>
        </div>

        <div id="page2">
            <div id="moving-text">
                <div className="Con">
                    <h1>STOCK</h1>
                    <div id="circle"></div>
                    <h1>PREDICTION</h1>
                    <div id="circle"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="circle"></div>
                </div>
                <div className="Con">
                    <h1>STOCK</h1>
                    <div id="circle"></div>
                    <h1>PREDICTION</h1>
                    <div id="circle"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="circle"></div>
                </div>
                <div className="Con">
                    <h1>STOCK</h1>
                    <div id="circle"></div>
                    <h1>PREDICTION</h1>
                    <div id="circle"></div>
                    <h1>ENVIRONMENTS</h1>
                    <div id="circle"></div>
                </div>
            </div>
            <div id="page2-bottom">
                <h1>Cutting-edge stock price prediction project leveraging machine learning algorithms to analyze historical data.</h1>
                <div id="bottom-part2">
                    <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt=""></img>
                    <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
                </div>
            </div>
            <div id="gooey"></div> 
        </div>
        <div id="page3">
            <div id="elem-container">
                <div id="elem1" className="elem"
                    data-image="https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Trade with Confidence</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Predictive Analytics Advantage</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Profit from Predictions</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Trade Ahead, Win.</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Data-Powered Profitability</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1613442368724-5bea257f8cbd?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Smart trades, big gains</h2>
                </div>
                <div className="elem"
                    data-image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div className="overlay"></div>
                    <h2>Maximize your returns.</h2>
                </div>
            </div>
            </div>
            <div id="page4">
            {/* <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  <div class="swiper-slide">Slide 4</div>
                  <div class="swiper-slide">Slide 5</div>
                  <div class="swiper-slide">Slide 6</div>
                  <div class="swiper-slide">Slide 7</div>
                </div>
                <div class="swiper-pagination"></div>
              </div>   */}
        </div>
        {/* <div id="page5">
        <div id="full-scr">
            <div id="full-div1">

            </div>
        </div>
        
    </div> */}
    <div id="footer">
            <div className="container">
            <div className="blob"></div>
            </div>
            
            
        {/* <div id="footer-div"></div> */}
        <h1>Finhawk Plus</h1>
        <div id="footer-bottom">

            
        </div>
        </div>
        </div>
        <div  dangerouslySetInnerHTML={{ __html: scri }} ></div>
    {/* <Script src ="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js" strategy="beforeInteractive"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
    <Script src="script.js" strategy="beforeInteractive"></Script> */}

        
        
</div>
        
  )
  
}     
