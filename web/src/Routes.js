// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/streams/{id:Int}/edit" page={EditStreamPage} name="editStream" />
      <Route path="/streams/new" page={NewStreamPage} name="newStream" />
      <Route
        path="/streams/{id:Int}/edit"
        page={EditStreamPage}
        name="editStream"
      />
      <Route path="/streams/{id:Int}" page={StreamPage} name="stream" />
      <Route path="/streams" page={StreamsPage} name="streams" />
      <Route path="/bands/new" page={NewBandPage} name="newBand" />
      <Route path="/bands/{id:Int}/edit" page={EditBandPage} name="editBand" />
      <Route path="/bands/{id:Int}" page={BandPage} name="band" />
      <Route path="/bands" page={BandsPage} name="bands" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
