import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";


export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Users
                        </Heading>

                        <Link href='/users/create' passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                            >
                                Create new user
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>
                                    User
                                </Th>

                                {
                                    isWideVersion && (
                                        <Th>
                                            Registration Date
                                        </Th>
                                    )
                                }

                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box >
                                        <Text fontWeight='bold'>
                                            John Doe
                                        </Text>
                                        <Text fontSize='sm' color='gray.300'>
                                            john.doe@email.com
                                        </Text>
                                    </Box>
                                </Td>

                                {
                                    isWideVersion && (
                                        <Td>
                                            July 23, 2022
                                        </Td>
                                    )
                                }

                                <Td>
                                    {
                                        isWideVersion && (
                                            <Button
                                                as='a'
                                                size='sm'
                                                fontSize='sm'
                                                colorScheme='pink'
                                                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                            >
                                                Edit
                                            </Button>
                                        )
                                    }
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />

                </Box>
            </Flex>
        </Box>
    )
}