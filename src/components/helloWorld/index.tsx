import {Box} from "@mui/material";


type Props = {
    todosLength:number
}


const MyComponent = ({todosLength}:Props) => {
    return (
        <Box sx={{display:"flex" , justifyContent:`${todosLength ? "start":"center"}` , flex:"1"}} >
            Hello World
        </Box>
    );
};

export default MyComponent;
