"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import { AdminContent } from '../../../content/general'
import CourseShowCardDiv from './courseshowcarddiv'
import { Badge } from '../ui/badge'
import Typoh4 from './typoh4'
import BtnLink from './btnlink'

const OngoingComp = (props:userprops) => {
  return (
    <div>
        <Card>
            <CardContent>
                ongoing
            </CardContent>
        </Card>
    </div>
  )
}

export default OngoingComp