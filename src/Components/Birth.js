import React,{useState} from 'react';
import styled from "styled-components";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";
import five  from "../assets/images/five.png";

export default function Birth() {
    const[items,setItems] =useState([
        {
            name:"Griffin Wooldridge",
            age:20,
            photo:one
        },{
            name:"Hester Hogan",
            age:23,
            photo:two
        },{
            name:"Danny Winget",
            age:25,
            photo:three
        },{
            name:"Joshua Vergara",
            age:23,
            photo:four
        },{
            name:"Jon Rettinger",
            age:20,
            photo:five
        }
    ])

    let renderItems = ()=>{
        return items.map((person)=>(
          
                <ItemContainer>
                    <Item>
                    <Img src={person.photo}  alt="Person1"/>
                    <Box>
                        <H4>{person.name}</H4>
                        <Small>{person.age} Years</Small>
                    </Box>
                    </Item>
                </ItemContainer>
              
        ))
    }
    return (
        <Container>
           <Heading>5 birthdays today</Heading>
            {renderItems()}
           <ClearButton>Clear All</ClearButton>
        </Container>
    )
}

const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  min-height: 100vh;
`;
const Heading = styled.h1`
    text-align:center;
    font-family: 'baloo_paaji_2bold';
    padding-top:20px;
`;
const ItemContainer = styled.div`
`;
const Item = styled.div`
    display:flex;
    align-items:center;
    margin:10px 0px 20px 0px;  
`;
const Img = styled.img`
 width:20%
`;
const Box = styled.div`
    margin-left:20px;
`;
const H4 = styled.h4`
    font-family: 'baloo_paaji_2bold';
`;
const Small = styled.small`
    color:grey;
`
const ClearButton = styled.button`
  padding:12px 160px;
  background:#D43D94;
  color:#fff;
  border-radius:7px;
  font-size:15px;
  

`;
