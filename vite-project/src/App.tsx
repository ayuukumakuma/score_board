import { Box, Button, Flex, Text } from "@mantine/core"
import { useState } from "react"

function App() {
  const [score, setScore] = useState<number>(0)

  // const handleKeyDown = (event: KeyboardEvent) => {
  //   let newScore = score
  //   if (event.key === 'Escape') {
  //     newScore = 0
  //   } else if (event.key === "1") {
  //     newScore += 50
  //   } else if (event.key === "2") {
  //     newScore += 20
  //   } else if (event.key === "3") {
  //     newScore += 10
  //   }
  //   setScore(newScore)
  // }
  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown, false)
  // }, [score]) //depsに useState の値が必要
  return (
    <Flex justify={"center"}>
      <Text fz={"700px"}>{score}</Text>
      <Text fz={100} mt={"43%"}>点</Text>
      <Box pos={"fixed"} bottom={0} mb={"20px"}>
        <Button onClick={() => setScore(score + 50)} size="xl">+50</Button>
        <Button onClick={() => setScore(score + 20)} size="xl">+20</Button>
        <Button onClick={() => setScore(score + 10)} size="xl">+10</Button>
        <Button onClick={() => setScore(0)} size="xl" color="red">Reset</Button>
      </Box>
    </Flex>
  )
}

export default App
