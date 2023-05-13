/* eslint-disable react/react-in-jsx-scope */

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import Container from "@mui/material/Container";
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/mergejliinfoto/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/344265790_258706793354141_3778495256189741618_n.jpg?stp=dst-jpg_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHHMOdvx7ZIl-rQANEjpbbT_Oj6OkgMyZT86Po6SAzJlOER6vp5TUWy8sLpYmk4tS0uK3aVvERi_Q0uetjzXtUi&_nc_ohc=9TuglO8e4ooAX8CjP21&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSfQXAIVlMsnZ24smJd5q4v0ERYXuiuyvgS6MAqQpo42A&oe=6485522C";

  return (
    <BaseLayout
      title="Мэргэжлийн Фото"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/mergejliinfoto" },
        { label: "Мэргэжлийн Фото" },
      ]}
    >
      <MKBox
        display="flex"
        alignItems="center"
        borderRadius="xl"
        my={2}
        py={6}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <TypographyRoboto />
        </Container>
      </MKBox>
    </BaseLayout>
  );
}

export default Typography;
