import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jhonata Gutemberg</Text>
          <Text color="gray.300" fontSize="small">
            gutemberg.jhonata@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jhonata Gutemberg"
        src="https://github.com/gutemberg-jhonata.png"
      />
    </Flex>
  )
}