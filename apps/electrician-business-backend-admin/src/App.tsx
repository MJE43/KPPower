import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PhotoGalleryList } from "./photoGallery/PhotoGalleryList";
import { PhotoGalleryCreate } from "./photoGallery/PhotoGalleryCreate";
import { PhotoGalleryEdit } from "./photoGallery/PhotoGalleryEdit";
import { PhotoGalleryShow } from "./photoGallery/PhotoGalleryShow";
import { BlogPostList } from "./blogPost/BlogPostList";
import { BlogPostCreate } from "./blogPost/BlogPostCreate";
import { BlogPostEdit } from "./blogPost/BlogPostEdit";
import { BlogPostShow } from "./blogPost/BlogPostShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { ContactFormList } from "./contactForm/ContactFormList";
import { ContactFormCreate } from "./contactForm/ContactFormCreate";
import { ContactFormEdit } from "./contactForm/ContactFormEdit";
import { ContactFormShow } from "./contactForm/ContactFormShow";
import { ServiceAreaList } from "./serviceArea/ServiceAreaList";
import { ServiceAreaCreate } from "./serviceArea/ServiceAreaCreate";
import { ServiceAreaEdit } from "./serviceArea/ServiceAreaEdit";
import { ServiceAreaShow } from "./serviceArea/ServiceAreaShow";
import { TestimonialList } from "./testimonial/TestimonialList";
import { TestimonialCreate } from "./testimonial/TestimonialCreate";
import { TestimonialEdit } from "./testimonial/TestimonialEdit";
import { TestimonialShow } from "./testimonial/TestimonialShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ElectricianBusinessBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PhotoGallery"
          list={PhotoGalleryList}
          edit={PhotoGalleryEdit}
          create={PhotoGalleryCreate}
          show={PhotoGalleryShow}
        />
        <Resource
          name="BlogPost"
          list={BlogPostList}
          edit={BlogPostEdit}
          create={BlogPostCreate}
          show={BlogPostShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="ContactForm"
          list={ContactFormList}
          edit={ContactFormEdit}
          create={ContactFormCreate}
          show={ContactFormShow}
        />
        <Resource
          name="ServiceArea"
          list={ServiceAreaList}
          edit={ServiceAreaEdit}
          create={ServiceAreaCreate}
          show={ServiceAreaShow}
        />
        <Resource
          name="Testimonial"
          list={TestimonialList}
          edit={TestimonialEdit}
          create={TestimonialCreate}
          show={TestimonialShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
