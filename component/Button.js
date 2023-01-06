import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({myAlignment}) {

  // if(myAlignment == 'top') {
  //   return(
  //   <TouchableOpacity style = {styles.Top}>
  //     <Text style = {styles.text}>abc</Text>
  //   </TouchableOpacity>
  //   );
  // }
  // else if(myAlignment == 'left') {
  //   return(
  //     <TouchableOpacity style = {styles.Left}>
  //       <Text style = {styles.text}>abc</Text>
  //     </TouchableOpacity>
  //     );
  // }
  // else if(myAlignment == 'right') {
  //   return(
  //     <TouchableOpacity style = {styles.Right}>
  //       <Text style = {styles.text}>abc</Text>
  //     </TouchableOpacity>
  //     );
  // }
  // else if(myAlignment == 'bottom') {
  //   return(
  //     <TouchableOpacity style = {styles.Bottom}>
  //       <Text style = {styles.text}>abc</Text>
  //     </TouchableOpacity>
  //     );
  // }
    

  return (
            myAlignment == 'top' ? (
                <TouchableOpacity style = {styles.Top}>
                <Text style = {styles.text}>abc</Text>
              </TouchableOpacity>
            ) : myAlignment == 'left' ? (
              <TouchableOpacity style = {styles.Left}>
              <Text style = {styles.text}>abc</Text>
              </TouchableOpacity>
            ) :  myAlignment == 'right' ? (
              <TouchableOpacity style = {styles.Right}>
              <Text style = {styles.text}>abc</Text>
              </TouchableOpacity>
            ): myAlignment == 'bottom' ? (
              <TouchableOpacity style = {styles.Bottom}>
              <Text style = {styles.text}>abc</Text>
            </TouchableOpacity>
            ) : <TouchableOpacity style = {styles.Bottom}>
              <Text style = {styles.text}>abc</Text>
            </TouchableOpacity>                
  );           
}
const styles = StyleSheet.create({
    Top: {
        backgroundColor: '#242527',
        width: 50,
        height:25,
        position:'absolute',
        top:20
      },
      Left: {
        backgroundColor: '#242527',
        width: 25,
        height:50,
        position:'absolute',
        left:0
      },
      Right: {
        backgroundColor: '#242527',
        width: 25,
        height:50,
        position:'absolute',
        right:0
      },
      Bottom: {
        backgroundColor: '#242527',
        width: 50,
        height:25,
        position:'absolute',
        bottom:'7%'
      },
      text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
      }
});

