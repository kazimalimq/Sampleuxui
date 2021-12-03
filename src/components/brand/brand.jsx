import React from 'react'
import './brand.css'

import {google, shopify, slack, atlassion, dropbox } from './imports'

const Brand = () => {
    return (
        <div className=" gpt3__brand section__padding">
        <div>
            <img src = {google} alt = "google"/>  
        </div>
        <div>
            <img src = {shopify} alt = "shopify"/>  
        </div>
        <div>
            <img src = {slack} alt = "slack"/>  
        </div>
        <div>
            <img src = {atlassion} alt = "atlassion"/>  
        </div>
        <div>
            <img src = {dropbox} alt = "dropbox"/>  
        </div>               
        </div>
    )
}

export default Brand