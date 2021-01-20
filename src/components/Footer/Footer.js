import React, { Component } from 'react';
import './footer.css'

const Footer = () => {

    return (
      <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <div className="" style={{color:'white !important', height:'150px', bottom:'0', position:'absolute', width:'auto', textAlign: 'center', backgroundColor:'#000'}}>
        <div className="mb4-l cf">
          <h1 className="fl w-100 pv0 f6 fw6 ttu tracked" style={{color: 'white'}}>StreamVids</h1>
          
        </div>
        <div className="dt dt--fixed w-100">
          <div className="dn dtc-ns v-mid">
            <p className="f7  dib pr3 mb3" style={{color: 'white'}}>Copyright © Manuelbiolatiri 2020</p>
          </div>
          <div className="db dtc-ns  tc  v-mid">
            <a
              href="https://www.facebook.com/"
              className="link dim dib mr3 "
              title="Impossible Labs on Facebook" style={{color: 'white'}}
            >
              <svg
                className="db w2 h2"
                data-icon="facebook"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <title>facebook icon</title>
                <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              className="link dim dib mr3 " style={{color: 'white'}}
            >
              <svg
                className="db w2 h2"
                data-icon="twitter"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <title>twitter icon</title>
                <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="db dn-ns">
          <p className="f7  mt4 tc" style={{color: 'white'}}>Copyright © Manuelbiolatiri 2020</p>
        </div>
      </div>
      </div>
    );

}

export default Footer;
