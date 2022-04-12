import React, { useState,useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image,ImageBackground,View,useWindowDimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const RenderItem =({item, index,entries, activeSlide})=> {
    
    return (
        <View >
            <Image source={{uri:entries[index]}} 
            style={{height:120,width:'100%',borderRadius:10}} />
        </View>
    )
}

 const  MyCarousel =()=> {
    const [activeSlide,setActive]=useState(0)
    const entries=['https://img.freepik.com/free-psd/vegetable-grocery-delivery-promotion-web-banner-facebook-cover-instagram-template_502896-109.jpg',
                        'https://i.pinimg.com/736x/0f/f6/ff/0ff6ff3499a81f32befcab02c9c5ce98.jpg',
                        'https://thumbs.dreamstime.com/z/shopping-paper-different-groceries-light-blue-wooden-background-flat-lay-space-text-shopping-paper-bag-different-156220128.jpg',
                    ]
     
    useEffect(()=>{
        const intervalId=setInterval(() => {
            setActive(a=>{
                if((a+1)>entries.length-1)return 0;
                return a+1
            })
            
        }, 3000);
        return ()=>{clearInterval(intervalId)}
    },[])
        return (
            <View>
                <RenderItem entries={entries} index={activeSlide} />
                
            </View>
        );
    }

export default MyCarousel;