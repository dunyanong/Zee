import { Button } from '@chakra-ui/react'


const NextButton = ({text}) => {
    return (
        <Button
        backgroundColor="brand.purple"
        color="#FFFFFF"
        width="100%"
        height="3rem"
        my={10}
        borderRadius="1rem"
      >
        {text}
      </Button>
        );
    };

export default NextButton;