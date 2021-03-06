import { DemoTrace } from "./types";

export const deviceTriggerEventTrace: DemoTrace = {
  trace: {
    last_action: "action/0",
    last_condition: null,
    run_id: "3",
    state: "stopped",
    timestamp: {
      start: "2021-03-13T10:30:30.058878+00:00",
      finish: "2021-03-13T10:30:30.205801+00:00",
    },
    trigger: "event 'lutron_caseta_button_event'",
    unique_id: "1578616228911",
    action_trace: {
      "action/0": [
        {
          timestamp: "2021-03-13T10:30:30.059607+00:00",
          changed_variables: {
            trigger: {
              platform: "device",
              event: {
                event_type: "lutron_caseta_button_event",
                data: {
                  serial: 47850540,
                  type: "Pico3ButtonRaiseLower",
                  button_number: 4,
                  device_name: "Right Light Pico",
                  area_name: "Master Bed",
                  action: "press",
                },
                origin: "LOCAL",
                time_fired: "2021-03-13T10:30:30.053185+00:00",
                context: {
                  id: "e5387dff0c615c67e8fa43bf9d5d72ca",
                  parent_id: null,
                  user_id: null,
                },
              },
              description: "event 'lutron_caseta_button_event'",
            },
            context: {
              id: "1c7d0dd26e031960e0ccbf0d9e0d8a16",
              parent_id: "e5387dff0c615c67e8fa43bf9d5d72ca",
              user_id: null,
            },
          },
        },
      ],
    },
    condition_trace: {},
    config: {
      id: "1578616228911",
      alias: "Turn Off Master Bed Lights from Picos",
      description: "",
      trigger: [
        {
          platform: "device",
          device_id: "36fd7cb4103ad0ce927e26a7ee44fa3a",
          domain: "lutron_caseta",
          type: "press",
          subtype: "off",
        },
        {
          platform: "device",
          device_id: "392111b5a9a362db57e2c49ec68b7a40",
          domain: "lutron_caseta",
          type: "press",
          subtype: "off",
        },
      ],
      condition: [],
      action: [
        {
          entity_id: "light.master_bed_lights",
          service: "light.turn_off",
        },
      ],
      mode: "single",
    },
    context: {
      id: "1c7d0dd26e031960e0ccbf0d9e0d8a16",
      parent_id: "e5387dff0c615c67e8fa43bf9d5d72ca",
      user_id: null,
    },
    variables: {
      trigger: {
        platform: "device",
        event: {
          event_type: "lutron_caseta_button_event",
          data: {
            serial: 47850540,
            type: "Pico3ButtonRaiseLower",
            button_number: 4,
            device_name: "Right Light Pico",
            area_name: "Master Bed",
            action: "press",
          },
          origin: "LOCAL",
          time_fired: "2021-03-13T10:30:30.053185+00:00",
          context: {
            id: "e5387dff0c615c67e8fa43bf9d5d72ca",
            parent_id: null,
            user_id: null,
          },
        },
        description: "event 'lutron_caseta_button_event'",
      },
    },
  },
  logbookEntries: [
    {
      name: "Turn Off Master Bed Lights from Picos",
      message: "has been triggered by event 'lutron_caseta_button_event'",
      source: "event 'lutron_caseta_button_event'",
      entity_id: "automation.turn_off_master_bed_lights_from_picos",
      when: "2021-03-13T10:30:30.059052+00:00",
      domain: "automation",
    },
    {
      when: "2021-03-13T10:30:30.200532+00:00",
      name: "Master Bed Lights",
      state: "off",
      entity_id: "light.master_bed_lights",
      context_entity_id: "automation.turn_off_master_bed_lights_from_picos",
      context_entity_id_name: "Turn Off Master Bed Lights from Picos",
      context_event_type: "automation_triggered",
      context_domain: "automation",
      context_name: "Turn Off Master Bed Lights from Picos",
    },
    {
      when: "2021-03-13T10:30:30.200532+00:00",
      name: "Master Bed Lights",
      state: "off",
      entity_id: "light.master_bed_lights",
      context_entity_id: "automation.turn_off_master_bed_lights_from_picos",
      context_entity_id_name: "Turn Off Master Bed Lights from Picos",
      context_event_type: "automation_triggered",
      context_domain: "automation",
      context_name: "Turn Off Master Bed Lights from Picos",
    },
    {
      when: "2021-03-13T10:30:30.200532+00:00",
      name: "Master Bed Lights",
      state: "off",
      entity_id: "light.master_bed_lights",
      context_entity_id: "automation.turn_off_master_bed_lights_from_picos",
      context_entity_id_name: "Turn Off Master Bed Lights from Picos",
      context_event_type: "automation_triggered",
      context_domain: "automation",
      context_name: "Turn Off Master Bed Lights from Picos",
    },
    {
      when: "2021-03-13T10:30:30.200532+00:00",
      name: "Master Bed Lights",
      state: "off",
      entity_id: "light.master_bed_lights",
      context_entity_id: "automation.turn_off_master_bed_lights_from_picos",
      context_entity_id_name: "Turn Off Master Bed Lights from Picos",
      context_event_type: "automation_triggered",
      context_domain: "automation",
      context_name: "Turn Off Master Bed Lights from Picos",
    },
    {
      when: "2021-03-13T10:30:30.200532+00:00",
      name: "Master Bed Lights",
      state: "off",
      entity_id: "light.master_bed_lights",
      context_entity_id: "automation.turn_off_master_bed_lights_from_picos",
      context_entity_id_name: "Turn Off Master Bed Lights from Picos",
      context_event_type: "automation_triggered",
      context_domain: "automation",
      context_name: "Turn Off Master Bed Lights from Picos",
    },
    {
      when: "2021-03-13T10:30:30.200532+00:00",
      name: "Master Bed Lights",
      state: "off",
      entity_id: "light.master_bed_lights",
      context_entity_id: "automation.turn_off_master_bed_lights_from_picos",
      context_entity_id_name: "Turn Off Master Bed Lights from Picos",
      context_event_type: "automation_triggered",
      context_domain: "automation",
      context_name: "Turn Off Master Bed Lights from Picos",
    },
  ],
};
