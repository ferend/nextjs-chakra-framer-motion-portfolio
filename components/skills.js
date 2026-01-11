import { Box, Heading, SimpleGrid, Icon, Text, VStack } from "@chakra-ui/react";
import {
    FaDocker, FaNodeJs, FaLinux, FaJsSquare, FaHtml5
} from "react-icons/fa";

import {
    SiKubernetes, SiJenkins, SiOracle, SiSpringboot, SiMysql,
    SiMicrosoftsqlserver, SiTypescript, SiNginx, SiCsharp,
    SiWindows, SiPixiv, SiWebgl, SiUnity
} from "react-icons/si";

export default function Skills() {
const groupedSkills = [
    // DevOps
    [
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    ],
    // Server / Backend Infrastructure
    [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Nginx", icon: SiNginx, color: "#009639" },
        { name: "IIS", icon: SiWindows, color: "#0078D6" },
    ],
    // Programming Languages
    [
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "C#", icon: SiCsharp, color: "#68217A" },
    ],
    // Databases
    [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MSSQL", icon: SiMicrosoftsqlserver, color: "#CC2927" },
        { name: "Oracle", icon: SiOracle, color: "#F80000" },
    ],
    // Frameworks / System Tech
    [
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Linux Servers", icon: FaLinux, color: "#FCC624" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    ],

    [
        { name: "PixiJS", icon: SiPixiv, color: "#0096FA" },
        { name: "WebGL", icon: SiWebgl, color: "#990000" },
        { name: "Unity", icon: SiUnity, color: "#000000" },
    ],
];


    return (
        <Box id="skills" py={10} textAlign="center">
            <Heading mb={8}>Technical Depth</Heading>

            <VStack spacing={10}>
                {groupedSkills.map((row, rowIndex) => (
                    <SimpleGrid
                        key={rowIndex}
                        columns={3}
                        spacing={4}
                        w="full"
                        justifyItems="center"
                    >
                        {row.map((skill) => (
                            <Box key={skill.name} textAlign="center">
                                <Icon as={skill.icon} boxSize={10} color={skill.color} />
                                <Text mt={2} fontSize="sm">{skill.name}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                ))}
            </VStack>
        </Box>
    );
}
