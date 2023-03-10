import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BiVideoPlus } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import logo from '../assests/logo.png';
import Avatar from './Avatar';
import { redirect } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_query: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    render() {
        return (
            <>
                <div className='container flex items-center justify-between px-2 h-20 sticky top-0 bg-white'>
                    {/* logo */}
                    <div className='logo'>
                        <img src={logo} className="w-32"></img>
                    </div>
                    {/* search */}
                    <form onSubmit={this.onSubmit}>
                        <div className="border border-black flex h-12 items-center justify-between w-25 min-w-[600px] rounded-full overflow-hidden">
                            <input type='text' placeholder='Search' value={this.state.search_query} id="search_query" className="w-full px-5 outline-none border-none text-lg" onChange={(e) => {
                                this.setState({ search_query: e.target.value })
                            }} />
                            <button type="submit" className="outline-none p-4 px-5 bg-gray-300">
                                <FaSearch />
                            </button>
                        </div>
                    </form>
                    {/* side icons */}
                    <div className="flex gap-x-4 items-center">
                        <span><BiVideoPlus className="text-3xl" /></span>
                        <span><BsBell className="text-3xl" /></span>
                        <span><Avatar /></span>
                    </div>
                </div>
            </>
        )
    }
}
