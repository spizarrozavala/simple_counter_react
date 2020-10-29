import React from "react"

function Image() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div key="image1" className="image">
                            <iframe src="https://giphy.com/embed/xT0xeJpnrWC4XWblEk" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/whoa-hd-tim-and-eric-xT0xeJpnrWC4XWblEk"></a></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div key="image2" className="image2">
                            <iframe src="https://giphy.com/embed/3OSo3PPaXdw0U" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mind-blown-3OSo3PPaXdw0U"></a></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div key="image3" className="image3">
                            <iframe src="https://giphy.com/embed/SDogLD4FOZMM8" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/collection-mind-SDogLD4FOZMM8"></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Image;