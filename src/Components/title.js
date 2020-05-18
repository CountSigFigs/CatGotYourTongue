import React from 'react';



function Title () {
    return (
            <div className='row'>
                <div className='col mx-auto mt-3 text-center'>
                    <span style={styles.title}>Cat Got Your Tongue?</span>
                    <br />
                    <p style={styles.tag}><i>Let me help you find synonyms and antonyms</i></p>
                </div>
            </div>
    )
}

const styles={
    title:{
        fontSize:42,
        fontWight:'bold',
        fontFamily:'Pangolin',
        color:'#77AA77'
    },
    tag:{
        fontFamily:'Pangolin'
    }
}
export default Title;