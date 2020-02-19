import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from './actions'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';


const Button = styled.button `
    box-shadow:inset 0px 1px 0px 0px #e184f3;
    background:linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);
	background-color: lavender;
	border-radius:6px;
	border:1px solid #a511c0;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
    text-shadow:0px 1px 0px #9b14b3;
    margin-top: 5px;

`
const Img = styled.img `
border: 7px dotted lavender;
`
const Div = styled.div `
object-fit: contain;
`

const H3 = styled.h3 `
font-family: monospace;

`



function DogFinder (props) {

return (
    <div>

    <Button onClick={props.fetchActivity}> Click Here! </Button>
    {!props.propsActivity && !props.propsIsLoading && 
    (<H3>Get a new Dog Image</H3>)}

        {props.propsIsLoading && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={300}
        />

        )}
      
            <Div>
        {props.propsActivity && !props.propsIsLoading && (
            //the properties back from the data
            <Img src={props.propsActivity} alt={props.propsActivity} />
        )}
       </Div>
     

    </div>
);

}


const mapStateToProps = state => {
    return {
        propsIsLoading: state.isLoading,
        propsActivity: state.activity,
        propsError: state.error 
    };
};

export default connect(
    mapStateToProps,
    {fetchActivity}
    )(DogFinder);