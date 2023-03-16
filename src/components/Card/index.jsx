import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://tse3.mm.bing.net/th/id/OIP.7RPJLxWEg7o0xkCu6PNf0QHaCs?pid=ImgDet&rs=1" />
            <Content>
                <UserInfo>

                    <UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFfju91ZncmZeoMS_9uTEQkoO8wlvh-k7M78DZhch94TW8aT7lG9_ZjOThwxcvKXZYEE&usqp=CAU" />
                    <div>
                        <h4>Aluno(a)</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS </h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
