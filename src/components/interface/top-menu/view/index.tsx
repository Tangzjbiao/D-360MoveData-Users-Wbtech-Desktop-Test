"use client"

import { useEffect } from "react"

import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from "@/components/ui/menubar"
import { useFullscreenStatus } from "@/lib/hooks"
import { useSettingsView } from "@/settings/view"

export function TopMenuView() {
  const [isFullscreen, setFullscreen, ref] = useFullscreenStatus()

  // we want the whole body to become fullscreen
  // TODO: use pointer lock, to prevent the mouse from going up
  useEffect(() => {
    if (typeof window !== "undefined") {
      ref.current = document.body
    }
  }, [])

  const showTimeline = useSettingsView((s) => s.showTimeline)
  const setShowTimeline = useSettingsView((s) => s.setShowTimeline)

  const showExplorer = useSettingsView((s) => s.showExplorer)
  const setShowExplorer = useSettingsView((s) => s.setShowExplorer)

  const showChat = useSettingsView((s) => s.showChat)
  const setShowChat = useSettingsView((s) => s.setShowChat)

  const showVideoPlayer = useSettingsView((s) => s.showVideoPlayer)
  const setShowVideoPlayer = useSettingsView((s) => s.setShowVideoPlayer)

  return (
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem
          checked={isFullscreen}
          onClick={(e) => {
            // currently isFullscreen is a bit buggy and might not reflect the correct value
            // setFullscreen(!isFullscreen)

            // so to be sure we use setFullscreen in "toggle" mode
            // (ie. we don't pass a boolean, so it will act as a current value switch)
            setFullscreen()

            e.stopPropagation()
            e.preventDefault()
            return false
          }}>
          Toggle fullscreen
        </MenubarCheckboxItem>
     
       {/*
        <MenubarSeparator />
        <MenubarCheckboxItem
          checked={showTimeline}
          onClick={(e) => {
            setShowTimeline(!showTimeline)
            e.stopPropagation()
            e.preventDefault()
            return false
          }}
        >Show timeline</MenubarCheckboxItem>
      
        <MenubarCheckboxItem
          checked={showExplorer}
          onClick={(e) => {
            setShowExplorer(!showExplorer)
            e.stopPropagation()
            e.preventDefault()
            return false
          }}
          >Show asset explorer</MenubarCheckboxItem>
        <MenubarCheckboxItem
          checked={showChat}
          onClick={(e) => {
            setShowChat(!showChat)
            e.stopPropagation()
            e.preventDefault()
            return false
          }}
          >Show chat assistant</MenubarCheckboxItem>
        <MenubarCheckboxItem
          checked={showVideoPlayer}
          onClick={(e) => {
            setShowVideoPlayer(!showVideoPlayer)
            e.stopPropagation()
            e.preventDefault()
            return false
          }}
          >Show video player</MenubarCheckboxItem>
          */}
      </MenubarContent>
    </MenubarMenu>
  )
}
