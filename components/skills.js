import { Box, Heading, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import {
    FaDocker, FaNodeJs, FaLinux, FaJsSquare, FaHtml5
} from "react-icons/fa";
import {
    SiKubernetes, SiJenkins, SiOracle, SiSpringboot, SiMysql, SiMicrosoftsqlserver,
    SiTypescript
} from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Linux Servers", icon: FaLinux, color: "#FCC624" },
        { name: "MSSQL", icon: SiMicrosoftsqlserver, color: "#CC2927" },
        { name: "Oracle", icon: SiOracle, color: "#F80000" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    ];

    return (
        <Box id="skills" py={10} textAlign="center">
            <Heading mb={8}>Technical Depth</Heading>
            <SimpleGrid columns={[2, 3, 4]} spacing={8}>
                {skills.map((skill) => (
                    <Box key={skill.name} textAlign="center">
                        <Icon as={skill.icon} boxSize={8} color={skill.color} /> {/* smaller */}
                        <Text mt={2} fontSize="sm">{skill.name}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}
