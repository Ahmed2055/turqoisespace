import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { deepOrange } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { BrowserRouter as Router, Switch , Route, Link , useRouteMatch, useHistory } from "react-router-dom";

function MobileMenu({ mobileMenuActive, setMobileMenuActive } : {mobileMenuActive: boolean , setMobileMenuActive: any}) {
    const [notificationsActive, setNotificationsActive] = useState(true);
    const history = useHistory();
    return (
        <div className="mobileMenu__background">
            <div className="mobileMenu">
                <div className="mobileMenuInner">
                    <div className="mobileMenu__top">
                        <div className="mobileMenu__iconDiv">
                            <IconButton aria-label="delete" color="inherit" onClick={() => setMobileMenuActive(!mobileMenuActive ) }>
                                <HighlightOffIcon fontSize="large" color="inherit" />
                            </IconButton>
                        </div>
                        <div className="mobileMenu__avatarDiv">
                            <Avatar alt="Ahmed" src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg" sx={{ width: 60, height: 60, bgcolor: deepOrange[500] }} />
                            <h4 className="mobileMenu__topName">Ahmed Teaima</h4>
                        </div>
                        <div className="mobileMenu__buttonsDiv">
                            <button className="mobileMenu__button">تسجيل الخروج</button>
                            <Link to="/" className="mobileMenu__link">
                                حسابي
                            </Link>
                        </div>
                    </div>

                    <Divider />
                    <nav aria-label="main mailbox folders">
                        <List>
                            
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/cart')}>
                                    <ListItemIcon>
                                        <ChevronLeftIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="ذهاب للسلة " className="centerTextAlign" />
                                    <ListItemIcon>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ChevronLeftIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="المفضلة" className="centerTextAlign" />
                                    <ListItemIcon>
                                        <FavoriteBorderIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => setNotificationsActive(!notificationsActive)}>
                                    <ListItemIcon>
                                        {notificationsActive ? (
                                            <div className="mobileMenu__notificationActive">
                                                <RadioButtonCheckedIcon color="inherit" />
                                            </div>
                                        ) : (
                                            <RadioButtonUncheckedIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary="الرسائل الترويجية " className="centerTextAlign" />
                                    <ListItemIcon>
                                        <CampaignIcon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ChevronLeftIcon />
                                    </ListItemIcon>
                                    <ListItemText primary=" تقييم المتجر و المنتجات " className="centerTextAlign" />
                                    <ListItemIcon>
                                        <StarPurple500Icon />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/aboutUs')}>
                                    <ListItemText primary=" عن تركواز " className="mobileMenu__btnLink" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/productsPages/WorkShops')} >
                                    <ListItemText primary='تجارب فنية' className="mobileMenu__btnLink" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/productsPages/PrivateClasses')} >
                                    <ListItemText primary="تجارب تركواز الخاصة" className="mobileMenu__btnLink" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/productsPages/Services')} >
                                    <ListItemText primary="خدماتنا للفنانين" className="mobileMenu__btnLink" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/productsPages/CounsellingServices')} >
                                    <ListItemText primary="خدمة الإستشارات" className="mobileMenu__btnLink" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => history.push('/ar/productsPages/PrivateOrders')} >
                                    <ListItemText primary="طلبات اللوحات الخاصة" className="mobileMenu__btnLink" sx={{ fontWeight: "bold", fontSize: 22 }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
