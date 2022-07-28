import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    toolTip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2022-07-23T00:00:00.000Z',
            '2022-07-24T00:00:00.000Z',
            '2022-07-25T00:00:00.000Z',
            '2022-07-26T00:00:00.000Z',
            '2022-07-27T00:00:00.000Z',
            '2022-07-28T00:00:00.000Z',
            '2022-07-29T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [
    {
        name: 'Series1',
        data: [ 31, 120, 1, 28, 51, 18, 59]
    }
];

export default function Dashboard() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid flex='1' gap='1' minChildWidth='320px' justifyContent='flex-start'>
                    <Box
                        p={['6', '8']}
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>
                            Subscribers of the week
                        </Text>

                        <Chart 
                            type="area"
                            height={150}
                            options={options}
                            series={series}
                        />
                    </Box>

                    <Box
                        p={['6', '8']}
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>
                            Open rate
                        </Text>

                        <Chart 
                            type="area"
                            height={160}
                            options={options}
                            series={series}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    )
}