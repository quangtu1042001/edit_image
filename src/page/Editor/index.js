import './index.css'
import React, { useState } from 'react'
import { GrRotateLeft, GrRotateRight } from 'react-icons/gr'
import { CgMergeVertical, CgMergeHorizontal } from 'react-icons/cg'
import { IoMdUndo, IoMdRedo, IoIosImage } from 'react-icons/io'
export default function Editor() {
    const filterElement = [
        {
            name: 'brightness',
            maxValue: 200
        },
        {
            name: 'grayscale',
            maxValue: 200
        },
        {
            name: 'sepia',
            maxValue: 200
        },
        {
            name: 'saturate',
            maxValue: 200
        },
        {
            name: 'contrast',
            maxValue: 200
        },
        {
            name: 'hueRotate'
        }
    ]

    const [state, setState] = useState({
        image: '',
        brightness: 100,
        grayscale: 0,
        sepia: 0,
        saturate: 100,
        contrast: 100,
        hueRotate: 0,
        rotate: 0,
        vartical: 1,
        horizental: 1
    })
    const imageHandle = (e) => {
        if (e.target.files.length !== 0) {
            const reader = new FileReader()

            reader.onload = () => {
                setState({
                    ...state,
                    image: reader.result
                })
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const [property, setProperty] = useState(
        {
            name: 'brightness',
            maxValue: 200
        }
    )
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const leftRotate = () => {
        setState({
            ...state,
            rotate: state.rotate - 90
        })
    }


    const rightRotate = () => {
        setState({
            ...state,
            rotate: state.rotate + 90
        })
    }

    const varticalFlip = () => {
        setState({
            ...state,
            vartical: state.vartical === 1 ? -1 : 1
        })}

    const horizentalFlip = () => {
        setState({
            ...state,
            horizental: state.horizental === 1 ? -1 : 1
        })}
    console.log(state)
    return (
        <div className='image_editor'>
            <div className="editor">
                <div className="editor_header">
                    <h2>Image Editor</h2>
                </div>
                <div className="editor_body">
                    <div className="sidebar">
                        <div className="side_body">
                            <div className="filter_section">
                                <span style={{ fontSize: '15px', color: '#404040', display: 'block' }}>Filters</span>
                                <div className="filter_key">
                                    {
                                        filterElement.map((v, i) => <button className={property.name === v.name ? 'active' : ''} onClick={() => setProperty(v)} key={i} >{v.name}</button>)
                                    }
                                </div>
                            </div>
                            <div className='filter_slider'>
                                <div className='label_bar'>
                                    <label htmlFor='range'>Rotate </label>
                                    <span >100%</span>
                                </div>
                                <input name={property.name} onChange={inputHandle} value={state[property.name]} max={property.maxValue} type="range" />
                            </div>
                            <div className='rotate'>
                                <label htmlFor="">Rotate & Filp</label>
                                <div className="icon">
                                    <div onClick={leftRotate}><GrRotateLeft /></div>
                                    <div onClick={rightRotate}><GrRotateRight /></div>
                                    <div onClick={varticalFlip}><CgMergeVertical /></div>
                                    <div onClick={horizentalFlip }><CgMergeHorizontal /></div>
                                </div>

                            </div>

                            <div className='reset'>
                                <button>Reset</button>
                                <button>Save Image</button>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
            <div className='image-section'>
                <div className='image'>
                    {state.image ? <img style={{
                        filter: `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`,
                        transform: `rotate(${state.rotate}deg) scale(${state.vartical},${state.horizental})`
                    }} src={state.image} alt="" /> :
                        <label htmlFor='choose'>
                            <IoIosImage />
                            <span className='span_image'>
                                Choose Image
                            </span>
                        </label>
                    }


                </div>
                <div className='image-select' style={{ display: 'flex' }}>
                    <button className='undo' > <IoMdUndo></IoMdUndo></button>
                    <button className='redo'> <IoMdRedo /></button>
                    <button className='crop'> Crop image</button>
                    <label style={{ backgroundColor: 'red' }} htmlFor='choose' > Choose Image </label>
                    <input type="file" onChange={imageHandle} id='choose' ></input>
                </div>
            </div>
        </div>
    )
}