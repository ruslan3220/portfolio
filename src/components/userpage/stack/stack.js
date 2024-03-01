import React from 'react'
import html from "../../assets/image/html.svg"
import css from "../../assets/image/css.svg"
import js from "../../assets/image/js.svg"
import react from "../../assets/image/react.svg"
import redux from "../../assets/image/redux.svg"
import bootstrap from "../../assets/image/bootstrap.svg"
import tailwand from "../../assets/image/tailwand.svg"
import sass from "../../assets/image/sass.svg"
import gitlab from "../../assets/image/gitlab.svg"
import greensock from "../../assets/image/greensock.svg"
import vscode from "../../assets/image/vscode.svg"
import github from "../../assets/image/github.svg"

const Stack = () => {
  return (
    <div className='stack' id='stack'>
            <p className='stack-head text-center'>My Tech Stack</p>
            <p className='stack-desc text-center'>Technologies I’ve been working with recently</p>
            
            <div className='stack-cards row text-center justify-content-center'>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img className='content' width={100} src={html} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={css} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={js} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={react} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={redux} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={bootstrap} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={tailwand} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={sass} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={gitlab} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={greensock} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={vscode} alt="" /></a>
              </div>
              <div className='mb-5 p-0 col-2'>
                <a href="#"><img width={100} src={github} alt="" /></a>
              </div>
            </div>

        

    </div>
  )
}

export default Stack