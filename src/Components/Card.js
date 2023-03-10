import React, { Component } from 'react';
import thumbnail from '../assests/thumbnail.png'
import Avatar from './Avatar';
import { BsDot } from "react-icons/bs";
import nFormatter from '../utility/nformatter';
import { timeDifferenceForDate, readableTimestamp } from "readable-timestamp-js"


export default class Card extends Component {
    render() {
    const {snippet ,statistics} = this.props;
    const {publishedAt,thumbnails ,channelTitle ,title}=snippet;
    const {viewCount} =statistics;

    
    const date = publishedAt;
    
   
        return (
            <div className="flex flex-col " >
                <div className=' overflow-hidden  '>
                    <img src={thumbnails.high.url} alt="thumbnail"></img>
                </div>
                <div className='flex gap-x-4'>
                    <div>
                        <Avatar />
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <div className='text-sm flex items-center'>
                        <span>{nFormatter(viewCount)}{""}</span>
                        <BsDot />{" "}
                        <span>{timeDifferenceForDate(date)}</span>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
