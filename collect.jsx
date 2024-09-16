// steps code:
<div className="flex flex-col w-full items-center z-10">
        <ResizableGraphicPlusText
          text="Share entire physical environments. In real-time."
          style=""
          width={width}
          src={width < 640 ? sharePhysicalEnviornmentsLowQ : sharePhysicalEnviornments}
        />
        <ResizableGraphicPlusText
          text={
            <>
              Interact with people.{<br />}Engage with objects.{<br />}No interface to speak of.
            </>
          }
          style="flex-row-reverse mr-0"
          textStyle="lg:mr-12"
          width={width}
          src={width < 640 ? engageLowQ : engage}
          videoStyle=""
        />
        <ResizableGraphicPlusText
          text="Five years ahead of anything else in the space"
          style=""
          width={width}
          src={morph}
          button={true}
        />
      </div>