import * as React from 'react'
import { useState, useEffect } from 'react'
import './Admin.css'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import AdminOptions from './AdminOptions'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'

const columns = [
  { id: '1', label: 'Full Name', minWidth: 100 },
  { id: '2', label: 'Business Name', minWidth: 100 },
  {
    id: '3',
    label: 'Email',
    minWidth: 100,
    align: 'left',
  },
  {
    id: '4',
    label: 'Phone Number',
    minWidth: 100,
    align: 'left',
  },
  {
    id: '5',
    label: 'Category',
    minWidth: 100,
    align: 'left',
  },
  {
    id: '6',
    label: 'Admin',
    minWidth: 50,
    align: 'left',
  },
  {
    id: '7',
    label: 'Option',
    minWidth: 100,
    align: 'left',
  },
]

export default function StickyHeadTable() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    axios
      .get('https://eventplanningweb.herokuapp.com/auth/users', {
        headers: headers,
      })
      .then((res) => {
        setUsers(res.data.latestUsers)
        // console.log(res.data.latestUsers)
      })
      .catch((err) => {
        toast.error('Unable to connect')
      })
  }, [])

  const update = () => {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    axios
      .get('https://eventplanningweb.herokuapp.com/auth/users', {
        headers: headers,
      })
      .then((res) => {
        setUsers(res.data.latestUsers)
        // console.log(res.data.latestUsers)
      })
      .catch((err) => {
        toast.error('Unable to connect')
      })
  }

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleFilter = (id) => {
    let user = []

    for (let i = 0; i < users.length; i++) {
      if (id !== users[i]._id) {
        user.push(users[i])
      }
    }

    setUsers(user)
  }

  return (
    <div className='admin'>
      <Navbar />

      <div className='admin-div'>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.label}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: '#20364b',
                        color: 'white',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role='checkbox'
                          tabIndex={-1}
                          key={row._id}
                        >
                          <TableCell>{row.fullName}</TableCell>
                          <TableCell>{row.businessName}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.phoneNumber}</TableCell>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>
                            {row.isAdmin === true ? (
                              <DoneIcon style={{ color: 'green' }} />
                            ) : (
                              <CloseIcon style={{ color: 'red' }} />
                            )}
                          </TableCell>
                          <TableCell>
                            {
                              <AdminOptions
                                id={row._id}
                                reload={() => handleFilter(row._id)}
                                admin={row.isAdmin}
                                update={() => update(row._id)}
                              />
                            }
                          </TableCell>
                        </TableRow>
                      )
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{
              backgroundColor: '#20364b',
              color: 'white',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
          />
        </Paper>
      </div>

      <Footer />
    </div>
  )
}
