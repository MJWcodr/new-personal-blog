import React from "react";

import { ActionIcon, Avatar, Container, Group, Input} from '@mantine/core';

import { GearIcon, PersonIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

import "./nav.scss";

import styles from '../../styles/styles.json';


class Navigation extends React.Component {
  componentDidMount() {
      document.title = "@mjwcodr";  }
  render (){
      return (
        <div className="Navbar">
            <Container fluid padding="md">
                <Group position="left">
                      <a href="/">
                        <Avatar color={styles.color.gray} radius="xl"  >Mk</Avatar>
                      </a>
                      <div className="ico-bar">
                          <ActionIcon radius="xl">
                                <GearIcon color={styles.color.primary} style={{ width: 20, height: 20 }} />
                              </ActionIcon>
                          <a href="/about">
                            <ActionIcon  radius="xl">
                            <PersonIcon color={styles.color.primary} style={{ width: 20, height: 20 }} />
                            </ActionIcon>
                          </a>
                          
                      </div>
                      <Input icon={<MagnifyingGlassIcon/>} className="searchbar"/>
                </Group>
                
              
            </Container>
        </div>
          )
      }
  }

export default Navigation;