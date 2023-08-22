import './index.css'
export default function Editor(){
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
                            <span style={{fontSize:'15px',color:'#404040',display:'block'}}>Filters</span>
                            <div className="filter_key">
                                {
                                    filterElement.map((v, i) => 
                                    <button  key={i} > {v.name} </button>)
                                }
                            </div>
                        </div>
                        <div className='filter_slider'>
                            <div className='label_bar'>
                                <label htmlFor='range'>Rotate </label>
                                <span >100%</span>
                            </div>
                            <input style={{width:'100%'}} type='range'></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }