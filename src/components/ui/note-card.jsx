import {
  Box,
  Heading,
  IconButton,
  Card,
  CardBody,
  HStack,
  VStack,
  Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CheckCircle, Circle, FileEdit } from 'lucide-react'
import { AlertDialog } from './alert-dialog'
import { showFormattedDate } from '@/utils'
import { useNotes } from '@/context'

export const NoteCard = ({ id, title, body, createdAt, archived }) => {
  const { deleteNote } = useNotes()

  return (
    <Card
      w='full'
      cursor='default'
      bg='brand.softDark'
      color='brand.light'
      transitionDuration='300ms'
      _hover={{ bg: 'brand.border', transform: 'translateY(-2px)' }}>
      <CardBody display='flex' p={3} gap={3} justifyContent='space-between'>
        <HStack gap={3}>
          {archived ? (
            <IconButton aria-label='uncheck note' icon={<CheckCircle />} />
          ) : (
            <IconButton
              aria-label='check note'
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.warning' }}
              _active={{ bgColor: 'transparent' }}
              icon={<Circle />}
            />
          )}
          <Box display='flex' flexDir='column' gap={2}>
            <Link to={`/detail/${id}`}>
              <Heading
                as='h2'
                fontSize='lg'
                fontWeight='600'
                display='inline-block'
                _hover={{ textDecor: 'underline' }}
                _active={{ bgColor: 'transparent' }}>
                {title}
              </Heading>
            </Link>
            <Text fontSize='sm' fontWeight='300'>
              {`${body.slice(0, 55)}...`}
            </Text>
          </Box>
        </HStack>
        <VStack>
          <Text fontSize='12px' fontWeight={700}>
            {showFormattedDate(createdAt)}
          </Text>
          <HStack gap={0}>
            <IconButton
              aria-label='edit note'
              color='brand.light'
              variant='ghost'
              _hover={{ color: 'brand.success' }}
              _active={{ bgColor: 'transparent' }}
              icon={<FileEdit />}
            />
            <AlertDialog
              title='Note'
              description='Are you sure you want to delete this note?'
              onDelete={() => deleteNote(id)}
            />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}