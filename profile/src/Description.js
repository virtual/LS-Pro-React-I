import React, { Component } from 'react'; 

class Description extends Component {
    render() {
        return (
             <div>
             <h2>About {this.props.name}</h2>
                <p>Jeanine enjoys crafting web experiences for higher education and non-profits. Her passions include listening to pop punk music, sharing Chinese language and culture with those around her, and visiting every aircraft museum she and her husband can find. She is a 2015 graduate of the Leadership MSU program and currently studies Business Administration – Management at Great Falls College-MSU.</p>
                <p>Jeanine previously developed websites for Montana State University and MontanaPBS (2009-2015). She enjoys implementing new designs into responsive HTML/CSS and specializes in working with OmniUpdate and clients in <a href='https://twitter.com/search?q=%23heweb'>#heweb</a>!</p>
            </div>
        )
    }
}

export default Description;