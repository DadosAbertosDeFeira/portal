import IconProject from "@assets/icons/icon-projects.svg";
import { projects } from "@utils/projects";
import { Box } from "atoms/Box";
import { Headline } from "atoms/Headline";
import { Link } from "atoms/Link";
import { Tag } from "atoms/Tag";
import { Text } from "atoms/Text";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const Projects = () => {
  return (
    <Box>
      {/* Header */}
      <Box className="flex flex-col items-center">
        <Image
          className="mb-md h-[100px] w-[100px]"
          src={IconProject}
          alt="Logo da sessão de projetos"
        />
        <Headline as="h2">Projetos</Headline>
      </Box>

      {/* Content */}
      <Box className="mt-md flex max-w-[1240px] flex-col tablet:flex-row tablet:flex-wrap tablet:content-evenly tablet:justify-center">
        {projects.map((project) => (
          <Box
            key={project.name}
            className="align-center m-md flex max-w-[500px] rounded shadow-3 tablet:m-xl tablet:flex"
          >
            {/* Logo Wrapper */}
            <Box>
              <Image
                className="h-auto max-w-[initial] rounded-l"
                src={project.logo.path}
                alt={project.logo.description}
              />
            </Box>

            {/* Content */}
            <Box className="flex flex-col px-sm pb-xs tablet:px-sm tablet:pb-xs tablet:pt-sm">
              <Headline as="h3" className="mb-sm tablet:mb-md">
                {project.name}
              </Headline>
              <Text className="flex-1 text-xs text-black">
                {project.description}
              </Text>

              <Box className="flex flex-row justify-between">
                <Box className="hidden sm:flex">
                  {project.type.map((tag) => (
                    <Tag key={tag} className="mr-xs">
                      {tag}
                    </Tag>
                  ))}
                </Box>

                <Link
                  className="text-primary"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box className="flex items-center">
                    Link
                    <FiArrowUpRight className="ml-xs stroke-primary" />
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
