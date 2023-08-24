import './index.css'
import React,{useState} from 'react'
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
    
    const [state,setState] = useState({
        Image:''
    })
    const imageHandle = (e) =>{
        if(e.target.files.length !==0){
            console.log('ok')
        }
    }
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
                                        filterElement.map((v, i) =>
                                            <button className='button_sepia' key={i} > {v.name} </button>)
                                    }
                                </div>
                            </div>
                            <div className='filter_slider'>
                                <div className='label_bar'>
                                    <label htmlFor='range'>Rotate </label>
                                    <span >100%</span>
                                </div>
                                <input className='custom-range' type='range'></input>
                            </div>
                            <div className='rotate'>
                                <label htmlFor="">Rotate & Filp</label>
                                <div className="icon">
                                    <div><GrRotateLeft /></div>
                                    <div ><GrRotateRight /></div>
                                    <div ><CgMergeVertical /></div>
                                    <div ><CgMergeHorizontal /></div>
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
                    <label htmlFor='choose'>
                        <IoIosImage />
                        <span className='span_image'>
                            Choose Image
                        </span>
                    </label>

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