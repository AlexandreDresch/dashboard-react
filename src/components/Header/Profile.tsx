import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfilePros {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfilePros) {
    return (
        <Flex align='center'>

            {
                showProfileData && (
                    <Box mr='4' textAlign='right'>
                        <Text>
                            Username
                        </Text>

                        <Text color='gray.300' fontSize='sm'>
                            test@email.com
                        </Text>
                    </Box>
                )
            }

            <Avatar size='md' name='Alexandre Dresch' src='https://github.com/alexandreDresch.png' />
        </Flex>
    )
}