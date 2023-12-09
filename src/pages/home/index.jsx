import { Frown, Search, Plus } from 'lucide-react'
import {
  Container,
  Box,
  VStack,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  IconButton
} from '@chakra-ui/react'
import { NoteCard } from '@/components/ui'
import { useNotes } from '@/context'

export const Home = () => {
  const { notes } = useNotes()

  return (
    <>
      <Container maxW='container.sm' minH='100vh'>
        <Box as='header' py='1rem'>
          <Heading as='h1' size='xl' fontWeight='700' textAlign='center'>
            Snap Note
          </Heading>
          <Box as='nav' mt={6} display='flex' gap={3} alignItems='center'>
            <InputGroup>
              <InputLeftAddon
                pr={0}
                pl={4}
                border={0}
                h={12}
                bg='brand.softDark'
                color='gray.500'
                children={<Search size={22} />}
              />
              <Input
                type='search'
                placeholder='Search Note'
                border={0}
                h={12}
                bg='brand.softDark'
              />
            </InputGroup>
            <IconButton
              h={12}
              w={14}
              variant='ghost'
              aria-label='add note'
              bg='brand.softDark'
              color='gray.500'
              _hover={{ bgColor: 'brand.border' }}
              _active={{ bgColor: 'transparent' }}
              icon={<Plus />}
            />
          </Box>
        </Box>
        <Box as='main' pb={10}>
          <VStack as='article' gap={3}>
            {notes.length > 0 ? (
              notes
                .slice(0, 4)
                .map((note) => <NoteCard key={note.id} {...note} />)
            ) : (
              <Box display='flex' alignItems='center' gap={2}>
                <Frown size={32} />
                <Text as='h2' fontSize='3xl' fontWeight={500}>
                  Note is empty
                </Text>
              </Box>
            )}
          </VStack>
        </Box>
      </Container>
    </>
  )
}
