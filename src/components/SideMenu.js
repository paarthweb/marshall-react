// import React from "react";
// import styled from "styled-components";
// import { Switch, Route, useLocation, Link } from "react-router-dom";
// import Toolbar from "@material-ui/core/Toolbar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Container from "@material-ui/core/Container";
// import {
//   HeaderMockUp,
//   NavHeaderMockUp,
//   NavContentMockUp
// } from "@mui-treasury/mockup/layout";
// import Layout, {
//   Root,


//   getHeader,
//   getDrawerSidebar,
//   getSidebarTrigger,
//   getSidebarContent,
//   getCollapseBtn,
//   getContent
// } from "@mui-treasury/layout";

// const Header = getHeader(styled);
// const DrawerSidebar = getDrawerSidebar(styled);
// const SidebarTrigger = getSidebarTrigger(styled);
// const SidebarContent = getSidebarContent(styled);
// const CollapseBtn = getCollapseBtn(styled);
// const Content = getContent(styled);

// const scheme = Layout();

// scheme.configureHeader(builder => {
//   builder.create("whatever_id").registerConfig("xs", {
//     position: "sticky"
//   });
// });

// const Dashboard = () => {
//   const location = useLocation();
//   scheme.configureEdgeSidebar(builder => {
//     builder
//       .create("primarySidebar", { anchor: "left" })
//       .registerPermanentConfig("xs", {
//         width: 200, // px, (%, rem, em is compatible)
//         collapsible: true,
//         collapsedWidth: 64
//       });

//     if (location.pathname === "/") {
//       builder.hide("primarySidebar", true);
//     }
//     // or like this
//     // builder.hide("primarySidebar", location.pathname === '/')
//   });
//   return (
//     <Root scheme={scheme}>
//       {({ state: { sidebar } }) => (
//         <>
//           <CssBaseline />
//           <Header>
//             <Toolbar>
//               <SidebarTrigger sidebarId="primarySidebar" />
//               <HeaderMockUp />
//             </Toolbar>
//           </Header>
//           <DrawerSidebar sidebarId="primarySidebar">
//             <SidebarContent>
//               <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
//               <NavContentMockUp />
//             </SidebarContent>
//             <CollapseBtn />
//           </DrawerSidebar>
//           <Content>
//             <Container maxWidth="sm">
//               {location.pathname !== "/" && (
//                 <div>
//                   <Link to="/">Back to home</Link>
//                 </div>
//               )}
//               <Switch>
//                 <Route path="/" exact render={() => <h1>Home</h1>} />
//                 <Route path="/page2" exact render={() => <h1>Page 2</h1>} />
//                 <Route path="/page3" exact render={() => <h1>Page 3</h1>} />
//               </Switch>
//               <div>
//                 <Link to="/page2">Page2</Link>
//               </div>
//               <div>
//                 <Link to="/page3">Page3</Link>
//               </div>
//             </Container>
//           </Content>
//         </>
//       )}
//     </Root>
//   );
// };

// export default Dashboard;
